"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Historic from "../_components/Historic";
import * as S from "./styles";
import { isAuthenticated } from "@/services/authService";
import { fetchPdfs } from "@/services/api";
import Chatbox from "../_components/Chatbox";

interface Pdf {
  id: string;
  filename: string;
  chat?: { id: string };
}

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

  const handleSelectChat = (chatId: string | null, pdfId: string) => {
    setSelectedChat(chatId);
    setSelectedPdf(pdfId);
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <S.PageContainer>
      <S.Sidebar>
        <Historic pdfs={pdfs} onSelectChat={handleSelectChat} />
      </S.Sidebar>
  
      <S.MainContent>
        <Chatbox chatId={selectedChat} onChatCreated={setSelectedChat} />
      </S.MainContent>
    </S.PageContainer>
  );
}
