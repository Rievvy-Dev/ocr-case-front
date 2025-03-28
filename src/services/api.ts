import axios from "axios";
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
      `${process.env.NEXT_PUBLIC_API_URL}/upload`,
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

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
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

export const deleteChat = async (fileId: string) => {
  try {
    const token = getCookie("jwt-token");

    if (!token) {
      throw new Error("Token não encontrado. Faça login novamente.");
    }

    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: { fileId }, 
      withCredentials: true,
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
      `${process.env.NEXT_PUBLIC_API_URL}/chat/messages/history`,
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
      `${process.env.NEXT_PUBLIC_API_URL}/upload/file`,
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
      throw new Error("É necessário fornecer um chatId ou fileId.");
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/chat/messages`,
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

export const downloadChatHistory = async (chatId: string) => {
  try {
    const token = getCookie("jwt-token");

    if (!token) {
      throw new Error("Token não encontrado. Faça login novamente.");
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/chat/download`,
      { chatId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
        withCredentials: true,
      }
    );

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `historico_chat_${chatId}.pdf`);
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Erro ao baixar histórico de chat:", error);
    throw error;
  }
};