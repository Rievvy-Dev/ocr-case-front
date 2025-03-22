"use client"

import React from "react";
import * as S from "./styles";

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children, ...props }) => {
  return <S.SubmitButton {...props}>{children}</S.SubmitButton>;
};

export default SubmitButton;