"use client";

import { useState } from "react";
import * as S from "./styles";

interface Pdf {
  id: string;
  filename: string;
  chat?: { id: string };
}

interface HistoricProps {
  pdfs: Pdf[];
  onSelectChat: (chatId: string | null, pdfId: string) => void;
}

const Historic = ({ pdfs, onSelectChat }: HistoricProps) => {
  const [selectedPdfId, setSelectedPdfId] = useState<string | null>(null);

  const handleClick = (pdf: Pdf) => {
    setSelectedPdfId(pdf.id);
    onSelectChat(pdf.chat?.id || null, pdf.id);
  };

  return (
    <S.HistoricContainer>
      <h2>Histórico</h2>
      {pdfs.map((pdf) => (
        <S.PdfItem
          key={pdf.id}
          onClick={() => handleClick(pdf)}
          selected={pdf.id === selectedPdfId}
        >
          {pdf.filename}
        </S.PdfItem>
      ))}
    </S.HistoricContainer>
  );
};

export default Historic;
