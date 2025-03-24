"use client";


import { FiSend } from "react-icons/fi";
import * as S from "./styles";

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
      <S.SendButton onClick={onSend}>
        <FiSend size={24} />
      </S.SendButton>
    </S.TextInputContainer>
  );
};

export default TextInput;
