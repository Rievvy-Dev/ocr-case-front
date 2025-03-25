import axios from "axios";
import { API_BASE_URL } from "@/config/config";
import { getCookie } from "cookies-next";

export const uploadFile = async (file: File): Promise<UploadResponse> => {
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

    return response.data;
  } catch (error) {
    console.error("Erro ao enviar arquivo:", error);
    throw error;
  }
};

export const fetchPdfs = async () => {
  try {
    const token = getCookie("jwt-token");

    if (!token) {
      throw new Error("Token não encontrado. Faça login novamente.");
    }

    const response = await axios.get(`${API_BASE_URL}/upload`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar PDFs:", error);
    throw error;
  }
};

export const deleteChat = async (chatId: string) => {
  try {
    const token = getCookie("jwt-token");

    if (!token) {
      throw new Error("Token não encontrado. Faça login novamente.");
    }

    await axios.delete(`${API_BASE_URL}/upload/chat`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { chatId }, 
    });

  } catch (error) {
    console.error("Erro ao deletar chat:", error);
    throw error;
  }
};

export const fetchChatMessages = async (chatId: string) => {
  try {
    const token = getCookie("jwt-token");

    if (!token) {
      throw new Error("Token não encontrado. Faça login novamente.");
    }

    const response = await axios.post(
      `${API_BASE_URL}/chat/messages/history`,
      { chatId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },    
        withCredentials: true,
      }
    );

    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("Erro ao buscar mensagens do chat:", error);
    return []; 
  }
};

export const fetchPdfById = async (pdfId: string) => {
  try {
    const token = getCookie("jwt-token");

    if (!token) {
      throw new Error("Token não encontrado. Faça login novamente.");
    }

    const response = await axios.post(
      `${API_BASE_URL}/upload/file`,
      { pdfId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
        withCredentials: true,
      }
    );

    return URL.createObjectURL(response.data);
  } catch (error) {
    console.error("Erro ao buscar PDF:", error);
    throw error;
  }
};

export const sendMessage = async (
  chatId: string | null | undefined,
  content: string,
  fileId?: string | null
) => {
  try {
    const token = getCookie("jwt-token");

    if (!token) {
      throw new Error("Token não encontrado. Faça login novamente.");
    }

    const validChatId = chatId ?? undefined;
    const validFileId = fileId ?? undefined;

    if (!validChatId && !validFileId) {
      throw new Error(
        "É necessário fornecer um fileId para criar um novo chat."
      );
    }

    const response = await axios.post(
      `${API_BASE_URL}/messages`,
      {
        chatId: validChatId,
        sender: "user",
        message: content,
        fileId: validFileId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    throw error;
  }
};
