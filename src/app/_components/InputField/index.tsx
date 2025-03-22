"use client"

import React from "react";
import * as S from "./styles";

interface InputFieldProps {
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
  }

const InputField: React.FC<InputFieldProps> = ({ label, name, type, value, onChange, placeholder }) => {
    return (
      <S.InputWrapper>
        <label htmlFor={name}>{label}</label>
        <S.StyledInput 
          id={name}
          name={name} 
          type={type} 
          value={value} 
          onChange={onChange} 
          placeholder={placeholder} 
        />
      </S.InputWrapper>
    );
  };

export default InputField;