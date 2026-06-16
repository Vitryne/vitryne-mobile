import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import { Pressable, ScrollView, Text, View, ActivityIndicator } from "react-native";
import { Stepper } from "../../../../Components/Stepper/Stepper";
import { colors, commonStyles, spacing } from "../../../../Styles/commonStyles";
import { RootStackParamList } from "../../../../Types/navigation";
import { OpcaoPagamento } from "../../Components/OpcaoPagamento/OpcaoPagamento";
import { styles } from "./styles";
import { cartService, CartResponse } from "../../../../Api/cart";

type Props = NativeStackScreenProps<RootStackParamList, "Pagamento">;

const formas = [
  {
    id: "pix",
    titulo: "PIX",
    desc: "Aprovação imediata · 5% OFF",
    icone: "pix",
    familia: "fa6" as const,
  },
  {
    id: "credito",
    titulo: "Cartão de crédito",
    desc: "Até 12x · Visa •••• 4521",
    icone: "card-outline",
    familia: "ion" as const,
  },
  {
    id: "debito",
    titulo: "Cartão de débito",
    desc: "Aprovação imediata",
    icone: "card-outline",
    familia: "ion" as const,
  },
];

const steps = ["Endereço", "Pagamento", "Confirmação"];

function fmt(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function Pagamento({ navigation }: Props) {
  const [forma, setForma] = useState("pix");
  const [cart, setCart] = useState<CartResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    async function loadCart() {
      try {
        setLoading(true);
        setError(null);
        const data = await cartService.getCart();
        if (active) {
          setCart(data);
        }
      } catch (err: any) {
        if (active) {
          setError(err.message || "Erro ao carregar resumo do carrinho.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }
    loadCart();
    return () => {
      active = false;
    };
  }, []);

  async function recarregar() {
    try {
      setLoading(true);
      setError(null);
      const data = await cartService.getCart();
      setCart(data);
    } catch (err: any) {
      setError(err.message || "Erro ao carregar resumo do carrinho.");
    } finally {
      setLoading(false);
    }
  }

  function confirmar() {
    const orderId = "VTR-2024-08412"; // mock
    if (forma === "pix") {
      navigation.navigate("PaguePix", { orderId });
    } else {
      navigation.navigate("PedidoConfirmado", { orderId });
    }
  }

  if (loading) {
    return (
      <View style={[commonStyles.screen, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={{ marginTop: spacing.sm, color: colors.textMuted }}>Carregando dados do pedido...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[commonStyles.screen, { justifyContent: "center", alignItems: "center", padding: spacing.md }]}>
        <Ionicons name="alert-circle-outline" size={48} color={colors.danger} />
        <Text style={{ marginTop: spacing.sm, color: colors.text, fontWeight: "700", textAlign: "center" }}>
          Não foi possível carregar o resumo
        </Text>
        <Text style={{ marginTop: spacing.xs, color: colors.textMuted, textAlign: "center", marginBottom: spacing.md }}>
          {error}
        </Text>
        <Pressable style={[commonStyles.button, { paddingHorizontal: spacing.lg }]} onPress={recarregar}>
          <Text style={commonStyles.buttonText}>Tentar Novamente</Text>
        </Pressable>
      </View>
    );
  }

  const subtotal = cart ? cart.previsaoValorTotal : 0;
  const frete = cart && cart.itens.length > 0 ? 12.90 : 0;
  const desconto = forma === "pix" ? subtotal * 0.05 : 0;
  const total = subtotal + frete - desconto;

  return (
    <View style={commonStyles.screen}>
      <Stepper passos={steps} stepAtual={1} />

      <ScrollView contentContainerStyle={commonStyles.scrollContent}>
        <Text style={commonStyles.sectionLabel}>FORMA DE PAGAMENTO</Text>

        {formas.map((f) => (
          <OpcaoPagamento
            key={f.id}
            titulo={f.titulo}
            desc={f.desc}
            icone={f.icone}
            familia={f.familia}
            selecionado={forma === f.id}
            onPress={() => setForma(f.id)}
          />
        ))}

        <Pressable style={styles.addBtn}>
          <Text style={styles.addBtnText}>+ Novo cartão</Text>
        </Pressable>

        {/* Resumo */}
        <View style={commonStyles.card}>
          <Text style={styles.summaryTitle}>Resumo</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>{fmt(subtotal)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Frete</Text>
            <Text style={styles.summaryValue}>{fmt(frete)}</Text>
          </View>
          {forma === "pix" && (
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Desconto PIX (5%)</Text>
              <Text style={[styles.summaryValue, styles.summaryDiscount]}>
                - {fmt(desconto)}
              </Text>
            </View>
          )}
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>{fmt(total)}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={commonStyles.button} onPress={confirmar}>
          <View style={styles.buttonRow}>
            <Ionicons
              name="information-circle-outline"
              size={18}
              color={colors.white}
            />
            <Text style={commonStyles.buttonText}>Confirmar pedido</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

