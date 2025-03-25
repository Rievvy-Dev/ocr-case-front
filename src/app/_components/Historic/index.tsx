
"use client";

import { useEffect, useState } from "react";
import * as S from "./styles";
import { FiTrash2, FiPlus } from "react-icons/fi";

const Historic = ({ pdfs, onSelectChat, onDeleteChat, onCreateNewChat, selectedChat }: HistoricProps) => {

  const handleClick = (pdf: Pdf) => {
    onSelectChat(pdf.chat?.id || null);
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