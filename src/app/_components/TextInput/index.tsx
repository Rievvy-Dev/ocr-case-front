"use client";


import { FiSend } from "react-icons/fi";
import * as S from "./styles";
import IconButton from "../IconButton";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

const TextInput = ({ value, onChange, onSend }: TextInputProps) => {
  return (
    <S.TextInputContainer>
      <S.Input
        type="text"
        placeholder="Digite sua mensagem..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
      />
      <IconButton onClick={onSend} icon={<FiSend />} size={24} />
    </S.TextInputContainer>
  );
};

export default TextInput;