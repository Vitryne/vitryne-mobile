import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, Text, View } from "react-native";
import { RootStackParamList } from "../../../Types/navigation";
import { styles } from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "MenuCarrinho">;

export function MenuCarrinho({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carrinho</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Endereco")}
      >
        <Text style={styles.buttonText}>Ir para o checkout</Text>
      </Pressable>
    </View>
  );
}
