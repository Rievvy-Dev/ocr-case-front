import axios from "axios";
import { getCookie, setCookie } from "cookies-next";

interface AuthResponse {
  accessToken: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const isAuthenticated = async (): Promise<boolean> => {
  const token = getCookie("jwt-token");

  if (!token) return false;

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate-token`, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true,
    });

    return response.status === 200;
  } catch (error) {
    return false;
  }
};

export const registerUser = async (data: RegisterData) => {
  try {
    const response = await axios.post<AuthResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
      data,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    const token = response.data.accessToken; 

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

export const loginUser = async (data: LoginData) => {
    try {
      const response = await axios.post<AuthResponse>(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, 
      });
  
      const token = response.data.accessToken; 
  
      if (!token) {
        throw new Error("Token não recebido após login");
      }
  
      setCookie("jwt-token", token, {
        path: "/",
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
      });
  
      return token;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };
