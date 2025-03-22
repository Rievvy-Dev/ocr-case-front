"use client";

import { useState } from "react";
import SubmitButton from "../SubmitButton";
import Dropzone from "../Dropzone";
import * as S from "./styles";
import { uploadFile } from "@/services/upload";
import PDFPreview from "../PDFPreview";

const Dropbox = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleFileSelected = (file: File | null) => {
    if (file) {
      if (file.type !== "application/pdf") {
        setErrorMessage("Apenas arquivos PDF são permitidos.");
        setSelectedFile(null);
        return;
      }

      if (file.size > 50 * 1024 * 1024) {
        setErrorMessage("O arquivo deve ter no máximo 50MB.");
        setSelectedFile(null);
        return;
      }

      setErrorMessage(""); 
      setSelectedFile(file);
    } else {
      setErrorMessage("");
      setSelectedFile(null);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Por favor, selecione um arquivo antes de enviar.");
      return;
    }

    try {
      await uploadFile(selectedFile);
      alert("Arquivo enviado com sucesso!");
    } catch {
      alert("Erro ao enviar o arquivo.");
    }
  };

  return (
    <S.ComponentContainer>
      {!selectedFile && <S.Title>Arraste seu documento para o dropbox abaixo:</S.Title>}

      {!selectedFile ? (
        <Dropzone onFileSelected={handleFileSelected} />
      ) : (
        <S.PDFContainer>
          <PDFPreview file={selectedFile} />
        </S.PDFContainer>
      )}

      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}

      <S.ButtonContainer>
        <SubmitButton type="button" onClick={handleSubmit} disabled={!selectedFile}>
          Analisar
        </SubmitButton>
      </S.ButtonContainer>
    </S.ComponentContainer>
  );
};

export default Dropbox;
