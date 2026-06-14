import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, ScrollView, Text, View } from "react-native";
import { commonStyles } from "../../../../styles/commonStyles";
import { RootStackParamList } from "../../../../types/navigation";
import { styles } from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "PayPix">;

const codigoPix = "00020126360014BR.GOV.BCB.PIX0114+5511996412...";

export function PayPix({ navigation, route }: Props) {
  const { orderId } = route.params;

  return (
    <View style={commonStyles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.expiraLabel}>EXPIRA EM</Text>
        <Text style={styles.timer}>27:42</Text>

        {/* QR mock — aqui entraria <QRCode value={codigoPix} /> */}
        <View style={styles.qr}>
          <Text style={styles.qrText}>QR Code</Text>
        </View>

        <Text style={styles.totalLabel}>Total a pagar</Text>
        <Text style={styles.totalValue}>R$ 341,91</Text>

        <View style={styles.codeRow}>
          <Text style={styles.code} numberOfLines={1}>
            {codigoPix}
          </Text>
          <Pressable style={styles.copyBtn}>
            <Text style={styles.copyText}>Copiar</Text>
          </Pressable>
        </View>

        <Text style={styles.hint}>
          Após o payment, você é redirecionado automaticamente.{"\n"}Não feche
          este app.
        </Text>

        {/* botão mock pra simular o payment concluído */}
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("OrderConfirmed", { orderId })}
        >
          <Text style={commonStyles.buttonText}>Simular payment</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
