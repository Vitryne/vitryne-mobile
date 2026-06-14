import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, commonStyles } from "../../../Styles/commonStyles";
import { RootStackParamList } from "../../../Types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Produto">;

export function Produto({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Produto</Text>
      <Pressable
        style={commonStyles.button}
        onPress={() => navigation.navigate("MenuCarrinho")}
      >
        <Text style={commonStyles.buttonText}>Ir para o carrinho</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    padding: 24,
    backgroundColor: colors.background,
  },
  text: { fontSize: 18, fontWeight: "600", color: colors.text },
});
