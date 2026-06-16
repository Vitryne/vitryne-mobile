import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Stepper } from "../../../../Components/Stepper/Stepper";
import { fmt, useMenuCarrinho } from "../../../../Hooks/useMenuCarrinho";
import { colors, commonStyles } from "../../../../Styles/commonStyles";
import { RootStackParamList } from "../../../../Types/navigation";
import { OpcaoPagamento } from "../../Components/OpcaoPagamento/OpcaoPagamento";
import { styles } from "./styles";

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

export function Pagamento({ navigation }: Props) {
  const [forma, setForma] = useState("pix");
  const { total } = useMenuCarrinho();

  const frete = 12.9;
  const descontoPix = forma === "pix" ? total * 0.05 : 0;
  const totalFinal = total + frete - descontoPix;

  function confirmar() {
    const orderId = "VTR-2024-08412";

    if (forma === "pix") {
      navigation.navigate("PaguePix", {
        orderId,
        total: totalFinal,
      });
    } else {
      navigation.navigate("PedidoConfirmado", { orderId });
    }
  }

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

        <View style={commonStyles.card}>
          <Text style={styles.summaryTitle}>Resumo</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>{fmt(total)}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Frete</Text>
            <Text style={styles.summaryValue}>{fmt(frete)}</Text>
          </View>

          {forma === "pix" && (
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Desconto PIX (5%)</Text>
              <Text style={[styles.summaryValue, styles.summaryDiscount]}>
                - {fmt(descontoPix)}
              </Text>
            </View>
          )}

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>{fmt(totalFinal)}</Text>
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
