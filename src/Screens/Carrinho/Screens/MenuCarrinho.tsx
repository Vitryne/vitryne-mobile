import { View, Text, Pressable, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'MenuCarrinho'>;

export function MenuCarrinho({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carrinho</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Endereco')}>
        <Text style={styles.buttonText}>Ir para o checkout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 24, padding: 24 },
  text: { fontSize: 18, fontWeight: '600' },
  button: { backgroundColor: '#7C3AED', paddingVertical: 16, paddingHorizontal: 24, borderRadius: 12, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});