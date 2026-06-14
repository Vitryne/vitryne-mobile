export type RootStackParamList = {
  CartMenu: undefined;
  Address: undefined;
  Payment: undefined;
  PayPix: { orderId: string };
  OrderConfirmed: { orderId: string };
};