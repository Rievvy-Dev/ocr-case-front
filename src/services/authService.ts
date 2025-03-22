import axios from "axios";
import { setCookie } from "cookies-next";
import { API_BASE_URL } from "@/config/config";

interface AuthResponse {
  token: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterData) => {
  try {
    const response = await axios.post<AuthResponse>(`${API_BASE_URL}/auth/register`, data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true, 
    });

    const token = response.data.token;

    if (!token) {
      throw new Error("Token não recebido após registro");
    }

    setCookie("jwt-token", token, {
      path: "/",
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    });

    return token;
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    throw error;
  }
};