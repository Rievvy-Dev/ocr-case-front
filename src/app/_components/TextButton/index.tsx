"use client";

import React from "react";
import * as S from "./styles";

interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  size?: string;
  children: React.ReactNode;
}

const TextButton: React.FC<TextButtonProps> = ({ color = "#0070f3", size = "16px", children, ...props }) => {
  return (
    <S.TextButton color={color} size={size} {...props}>
      {children}
    </S.TextButton>
  );
};

export default TextButton;