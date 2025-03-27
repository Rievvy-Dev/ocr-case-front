"use client";

import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import * as S from "./styles";
import SubmitButton from "../SubmitButton";

interface DropzoneProps {
  onFileUploaded: (file: File) => void;
}

const Dropzone = ({ onFileUploaded }: DropzoneProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    
    if (file) {
      const allowedTypes = ["application/pdf", "image/png", "image/jpeg"];
      if (!allowedTypes.includes(file.type)) {
        alert("Apenas arquivos PDF, PNG e JPEG são permitidos.");
        return;
      }
      
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    try {
      await onFileUploaded(selectedFile);  
    } catch (error) {
      console.error("Erro no upload do arquivo:", error);
    } finally {
      setIsUploading(false);
    }
  };
  
  return (
    <S.Container>
      {!selectedFile ? (
        <S.DropzoneContainer>
          <input
            id="file-upload"
            type="file"
            accept="application/pdf, image/png, image/jpeg"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload">
            <S.UploadBox>
              <FiUpload size={40} />
              <p>Arraste e solte ou clique para selecionar um arquivo PDF ou imagem</p>
            </S.UploadBox>
          </label>
        </S.DropzoneContainer>
      ) : (
        <S.FileName>{selectedFile.name}</S.FileName>
      )}

      <S.UploadButton>
        <SubmitButton onClick={handleUpload} disabled={!selectedFile || isUploading}>
          {isUploading ? <FaSpinner className="spinner" /> : "Analisar"}
        </SubmitButton>
      </S.UploadButton>
    </S.Container>
  );
};

export default Dropzone;
