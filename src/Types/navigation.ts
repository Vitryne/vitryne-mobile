export type RootStackParamList = {
  MenuCarrinho: undefined;
  Endereco: undefined;
  Pagamento: undefined;
  PaguePix: { orderId: string; total: number };
  PedidoConfirmado: { orderId: string };
  Produto: { id: number } | undefined;
};
