import axiosClient from "./axiosClient";

export interface CartItemRequest {
  produtoId: number;
  tamanho: string;
  quantidade: number;
}

export interface CartItemResponse {
  id: number;
  produtoId: number;
  produtoNome: string;
  produtoPreco: number;
  produtoPrecoPromocional: number | null;
  produtoFotoUrl: string | null;
  tamanho: string;
  quantidade: number;
  precoUnitario: number;
  subtotal: number;
}

export interface CartResponse {
  id: number;
  usuarioId: number;
  previsaoValorTotal: number;
  itens: CartItemResponse[];
}

export const cartService = {
  async getCart(): Promise<CartResponse> {
    const response = await axiosClient.get<CartResponse>("/carrinho");
    return response.data;
  },

  async addItem(item: CartItemRequest): Promise<CartResponse> {
    const response = await axiosClient.post<CartResponse>("/carrinho/itens", item);
    return response.data;
  },

  async updateQuantity(itemId: number, quantidade: number): Promise<CartResponse> {
    const response = await axiosClient.put<CartResponse>(
      `/carrinho/itens/${itemId}?quantidade=${quantidade}`
    );
    return response.data;
  },

  async removeItem(itemId: number): Promise<CartResponse> {
    const response = await axiosClient.delete<CartResponse>(`/carrinho/itens/${itemId}`);
    return response.data;
  }
};
