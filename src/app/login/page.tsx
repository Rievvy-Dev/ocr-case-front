"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as S from "./styles";
import InputField from "../_components/InputField";
import SubmitButton from "../_components/SubmitButton";
import { loginUser } from "@/services/authService";
import TextButton from "../_components/TextButton";
import logo from "../../../public/assets/logo.jpg"

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await loginUser(form);
      router.replace("/"); 
    } catch (error) {
      console.error("Erro no login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.PageContainer>
      <S.ImageWrapper>
        <S.StyledImage src={logo} alt="Imagem de fundo" fill />
      </S.ImageWrapper>
      <S.ContentContainer>
        <S.LoginContainer>
          <S.Title>Bem-vindo de volta!</S.Title>
          <S.InputContainer onSubmit={handleSubmit}>
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
              {loading ? "Carregando..." : "Entrar"}
            </SubmitButton>
          </S.InputContainer>
          <S.Register>
            <p>Não tem uma conta?</p>
            <TextButton color="blue" size="14px" onClick={() => router.push("/cadastro")}>
              Cadastre-se
            </TextButton>
          </S.Register>
        </S.LoginContainer>
      </S.ContentContainer>
    </S.PageContainer>
  );
}