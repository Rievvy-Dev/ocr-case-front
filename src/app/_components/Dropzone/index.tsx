"use client";

import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import * as S from "./styles";
import { uploadFile } from "@/services/api";
import SubmitButton from "../SubmitButton";

interface DropzoneProps {
  onFileUploaded: (fileId: string) => void;
}

const Dropzone = ({ onFileUploaded }: DropzoneProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    try {
      const fileId = await uploadFile(selectedFile);
      onFileUploaded(fileId);
    } catch (error) {
      console.error("Erro no upload do arquivo:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      {!selectedFile ? (
        <S.DropzoneContainer>
          <input
            id="file-upload"
            type="file"
            accept="application/pdf"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload">
            <S.UploadBox>
              <FiUpload size={40} />
              <p>Arraste e solte ou clique para selecionar um arquivo PDF</p>
            </S.UploadBox>
          </label>
        </S.DropzoneContainer>
      ) : (
        <p>{selectedFile.name}</p>
      )}

      <S.UploadButton>
        <SubmitButton
          onClick={handleUpload}
          disabled={!selectedFile || isUploading}
        >
          {isUploading ? "Enviando..." : "Analisar"}
        </SubmitButton>
      </S.UploadButton>
    </>
  );
};

export default Dropzone;
