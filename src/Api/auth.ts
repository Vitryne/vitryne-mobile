import axiosClient from "./axiosClient";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface RegisterRequest {
  usuario: string;
  email: string;
  senha: String;
  role: "CONSUMER" | "STORE" | "DELIVERER" | "ADMIN";
}

export interface LoginRequest {
  email: string;
  senha: String;
}

export interface LoginResponse {
  token: string;
  usuario: string;
  email: string;
  role: string;
}

export const authService = {
  async register(data: RegisterRequest): Promise<any> {
    const response = await axiosClient.post("/auth/register", data);
    return response.data;
  },

  async login(data: LoginRequest): Promise<LoginResponse> {
    const response = await axiosClient.post<LoginResponse>("/auth/login", data);
    const authData = response.data;
    await AsyncStorage.setItem("auth_token", authData.token);
    return authData;
  },

  async logout(): Promise<void> {
    await AsyncStorage.removeItem("auth_token");
  },

  async isAuthenticated(): Promise<boolean> {
    const token = await AsyncStorage.getItem("auth_token");
    return token !== null;
  }
};
