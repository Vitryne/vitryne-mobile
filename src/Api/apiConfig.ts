import { Platform } from "react-native";

export const API_BASE_URL = Platform.select({
  android: "http://10.0.2.2:8080",
  default: "http://localhost:8080",
});

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiFetch<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new ApiError(
      response.status,
      body?.message ?? `Erro HTTP ${response.status}`,
    );
  }

  return response.json();
}

