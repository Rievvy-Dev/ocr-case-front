"use client";

import { useState, useRef } from "react";
import * as S from "./styles";

const Dropzone = ({ onFileSelected }: { onFileSelected: (file: File | null) => void }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileSelected(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      onFileSelected(e.dataTransfer.files[0]);
    }
  };

  return (
    <S.DropboxContainer onDragOver={handleDragOver} onDrop={handleDrop} onClick={() => fileInputRef.current?.click()}>
      <p>Arraste e solte um arquivo PDF aqui ou clique para selecionar.</p>
      <input 
        type="file" 
        ref={fileInputRef} 
        style={{ display: "none" }} 
        accept="application/pdf" 
        onChange={handleFileSelect} 
      />
    </S.DropboxContainer>
  );
};

export default Dropzone;
