"use client";

import { useEffect, useState } from "react";
import * as S from "./styles";
import * as pdfjsLib from 'pdfjs-dist';


const PDFPreview = ({ file }: { file: File }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result as string);
    };
  }, [file]);

  return (
    <S.PreviewContainer>
      {previewUrl ? (
        <iframe src={previewUrl} width="100%" height="400px" title="PDF Preview"></iframe>
      ) : (
        <p>Carregando pré-visualização...</p>
      )}
    </S.PreviewContainer>
  );
};

export default PDFPreview;
