"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Chatbox from "../_components/Chatbox";
import Dropbox from "../_components/Dropbox";
import Historic from "../_components/Historic";
import * as S from "./styles";
import { isAuthenticated } from "@/services/authService";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const authValid = await isAuthenticated(); 

      if (!authValid) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <S.PageContainer>
      <Historic />
      <Dropbox />
      <Chatbox />
    </S.PageContainer>
  );
}
