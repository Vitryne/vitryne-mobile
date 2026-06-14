import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { colors } from '../styles/commonStyles';

import { MenuCarrinho } from '../screens/carrinho';
import { Address } from '../screens/endereco';
import { Payment, PayPix } from '../screens/pagamento';
import { OrderConfirmed } from '../screens/pedido';
import { HeaderBack } from './../components/HeaderBack';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Rotas() {
  return (
    <Stack.Navigator
      initialRouteName="CartMenu"
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        headerTitleStyle: { fontSize: 20, fontWeight: '600' },
        headerTitleAlign: 'left',          
        headerShadowVisible: false,
        headerBackVisible: false,
        headerLeft: () => <HeaderBack />,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="CartMenu" component={MenuCarrinho} options={{ title: 'Meu carrinho' }} />
      <Stack.Screen name="Address" component={Address} options={{ title: 'Endereço de entrega' }} />
      <Stack.Screen name="Payment" component={Payment} options={{ title: 'Payment' }} />
      <Stack.Screen name="PayPix" component={PayPix} options={{ title: 'Pague com PIX' }} />
      <Stack.Screen name="OrderConfirmed" component={OrderConfirmed} options={{ title: 'Pedido confirmado' }} />
    </Stack.Navigator>
  );
}