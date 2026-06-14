import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Stepper } from "../../../../components/stepper/Stepper";
import { colors, commonStyles } from "../../../../styles/commonStyles";
import { RootStackParamList } from "../../../../types/navigation";
import { PaymentOption } from "../../components/opcoesPagamento/opcoesPagamento";
import { styles } from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Payment">;

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

const steps = ["Endereço", "Payment", "Confirmação"];

export function Payment({ navigation }: Props) {
  const [forma, setForma] = useState("pix");

  function confirmar() {
    const orderId = "VTR-2024-08412"; // mock
    if (forma === "pix") {
      navigation.navigate("PayPix", { orderId });
    } else {
      navigation.navigate("OrderConfirmed", { orderId });
    }
  }

  return (
    <View style={commonStyles.screen}>
      <Stepper passos={steps} stepAtual={1} />

      <ScrollView contentContainerStyle={commonStyles.scrollContent}>
        <Text style={commonStyles.sectionLabel}>FORMA DE PAGAMENTO</Text>

        {formas.map((f) => (
          <PaymentOption
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
            <Text style={styles.summaryValue}>R$ 347,00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Frete</Text>
            <Text style={styles.summaryValue}>R$ 12,90</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Desconto PIX (5%)</Text>
            <Text style={[styles.summaryValue, styles.summaryDiscount]}>
              - R$ 17,99
            </Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>R$ 341,91</Text>
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
            <Text style={commonStyles.buttonText}>Confirmar order</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
