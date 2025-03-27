"use client";

import React from "react";
import * as S from "./styles";
import IconButton from "../IconButton";
import { CiLogout } from "react-icons/ci";
import { FaFileMedicalAlt } from "react-icons/fa";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie("jwt_token", { path: "/" });
    router.push("/login");
  };

  return (
    <S.NavbarContainer>
      <S.Logo>
        <FaFileMedicalAlt size={20} />
        <h1>Analisador de Documentos</h1>
      </S.Logo>
      <S.NavLinks>
        <p>Logout</p>
        <IconButton
          icon={<CiLogout color="red" />}
          onClick={handleLogout}
          size={24}
        />
      </S.NavLinks>
    </S.NavbarContainer>
  );
};

export default Navbar;
