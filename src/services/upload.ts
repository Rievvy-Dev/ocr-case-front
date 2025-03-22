import axios from "axios";
import { API_BASE_URL } from "@/config/config";

interface UploadResponse {
  message: string;
}

export const uploadFile = async (file: File): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post<UploadResponse>(
      `${API_BASE_URL}/upload`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true, 
      }
    );

    return response.data.message; 
  } catch (error) {
    console.error("Erro ao enviar arquivo:", error);
    throw error;
  }
};