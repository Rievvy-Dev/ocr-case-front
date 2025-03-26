
"use client";

import * as S from "./styles";
import { FiTrash2, FiPlus, FiDownload } from "react-icons/fi";
import { downloadChatHistory } from "@/services/api";

const Historic = ({ pdfs, onSelectChat, onDeleteChat, onCreateNewChat, selectedChat }: HistoricProps) => {

  const handleClick = (pdf: Pdf) => {
    onSelectChat(pdf.chat?.id || null);
  };

  const handleDownload = async (pdf: Pdf) => {
    try {
      await downloadChatHistory(pdf.chat?.id || "");
    } catch (error) {
      console.error("Erro ao baixar histórico do chat:", error);
    }
  };

  return (
    <S.HistoricContainer>
      <S.Header>
        <h2>Histórico</h2>
        <S.NewChatButton onClick={onCreateNewChat}>
          <FiPlus size={20} /> Novo Chat
        </S.NewChatButton>
      </S.Header>
      <S.PdfList>
        {pdfs.map((pdf) => (
          <S.PdfItem
            key={pdf.id}
            onClick={() => handleClick(pdf)}
            selected={pdf.chat?.id === selectedChat}
          >
            <S.PdfTitle>{pdf.filename}</S.PdfTitle>
            <S.DownloadButton onClick={(e) => { e.stopPropagation(); handleDownload(pdf); }}>
              <FiDownload size={18} />
            </S.DownloadButton>
            <S.DeleteButton onClick={(e) => { e.stopPropagation(); onDeleteChat(pdf.id); }}>
              <FiTrash2 size={18} />
            </S.DeleteButton>
          </S.PdfItem>
        ))}
      </S.PdfList>
    </S.HistoricContainer>
  );
};

export default Historic;