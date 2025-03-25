"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Historic from "../_components/Historic";
import * as S from "./styles";
import { isAuthenticated } from "@/services/authService";
import { fetchPdfs, deleteChat } from "@/services/api";
import Chatbox from "../_components/Chatbox";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [pdfs, setPdfs] = useState<Pdf[]>([]);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authValid = await isAuthenticated();
      if (!authValid) {
        router.push("/login");
      } else {
        setLoading(false);
        loadPdfs();
      }
    };

    checkAuth();
  }, [router]);

  const loadPdfs = async () => {
    try {
      const data = await fetchPdfs();
      setPdfs(data);
    } catch (error) {
      console.error("Erro ao carregar PDFs:", error);
    }
  };

  const handleCreateNewChat = () => {
    setSelectedChat(null);
    setSelectedPdf(null);
  };

  const handleSelectChat = (chatId: string | null) => {
    setSelectedChat(chatId);
  };

  const handleDeleteChat = async (fileId: string) => {
    try {
      await deleteChat(fileId);
      setPdfs((prev) => prev.filter((pdf) => pdf.id !== fileId));

      if (selectedChat === fileId) {
        setSelectedChat(null);
      }
    } catch (error) {
      console.error("Erro ao excluir chat:", error);
    }
  };

  const handleFileUploaded = async (chatId: string) => {
    await loadPdfs();
    setSelectedChat(chatId);
  };

  const handleNewChat = () => {
    setSelectedChat(null);
    setSelectedPdf(null);
    setPdfs((prev) => [...prev]);
  };
  if (loading) return <p>Carregando...</p>;

  return (
    <S.PageContainer>
      <S.Sidebar>
        <Historic
          pdfs={pdfs}
          onSelectChat={handleSelectChat}
          onDeleteChat={handleDeleteChat}
          onCreateNewChat={handleCreateNewChat}
          selectedChat={selectedChat}
        />
      </S.Sidebar>

      <S.MainContent>
        <Chatbox chatId={selectedChat} onChatCreated={handleFileUploaded} />
      </S.MainContent>
    </S.PageContainer>
  );
}
