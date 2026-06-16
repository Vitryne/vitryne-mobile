import axiosClient from "./axiosClient";
import { ProdutoResponseDTO } from "../Types/Produto";

export const productsService = {
  async listar(): Promise<ProdutoResponseDTO[]> {
    const response = await axiosClient.get<ProdutoResponseDTO[]>("/produto");
    return response.data;
  },

  async buscarPorId(id: number): Promise<ProdutoResponseDTO> {
    const response = await axiosClient.get<ProdutoResponseDTO>(`/produto/${id}`);
    return response.data;
  }
};
