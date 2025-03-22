"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as S from "./styles";
import InputField from "../_components/InputField";
import SubmitButton from "../_components/SubmitButton";
import { registerUser } from "@/services/authService";
import TextButton from "../_components/TextButton";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await registerUser(form);
      router.replace("/");
    } catch (error) {
      console.error("Erro no registro:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.PageContainer>
      <S.ContentContainer>
        <S.LoginContainer>
          <S.Title>Vamos começar!</S.Title>
          <S.InputContainer onSubmit={handleSubmit}>
            <InputField
              label="Nome"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
            />
            <InputField
              label="E-mail"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
            />
            <InputField
              label="Senha"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Digite sua senha"
            />
            <SubmitButton type="submit" disabled={loading}>
              {loading ? "Carregando..." : "Cadastre-se"}
            </SubmitButton>
          </S.InputContainer>
          <S.Register>
            <p>Já possui uma conta?</p>
            <TextButton color="blue" size="14px" onClick={() => router.push("/login")}>
              Sign In
            </TextButton>
          </S.Register>
        </S.LoginContainer>
      </S.ContentContainer>
      <S.ImageWrapper>
        <S.StyledImage src="/login.svg" alt="Imagem de fundo" layout="fill" />
      </S.ImageWrapper>
    </S.PageContainer>
  );
}