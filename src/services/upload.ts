import axios from "axios";
import { API_BASE_URL } from "@/config/config";
import { getCookie } from "cookies-next"; 

interface UploadResponse {
  message: string;
}

export const uploadFile = async (file: File): Promise<string> => {
  try {
    const token = getCookie("jwt-token"); 

    if (!token) {
      throw new Error("Token não encontrado. Faça login novamente.");
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post<UploadResponse>(
      `${API_BASE_URL}/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`, 
        },
        withCredentials: true, 
      }
    );

    return response.data.message;
  } catch (error) {
    console.error("Erro ao enviar arquivo:", error);
    throw error;
  }
};