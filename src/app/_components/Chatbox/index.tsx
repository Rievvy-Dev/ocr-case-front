"use client";

import { useEffect, useState } from "react";
import * as S from "./styles";
import { FaRegFileAlt, FaUser, FaRobot } from "react-icons/fa";
import { fetchChatMessages, sendMessage, uploadFile } from "@/services/api";
import Dropzone from "../Dropzone";

interface ChatboxProps {
  chatId?: string | null;
  onChatCreated: (chatId: string) => void;
}

const Chatbox = ({ chatId, onChatCreated }: ChatboxProps) => {
  const [messages, setMessages] = useState<{ sender: string; content: string }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [fileId, setFileId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (chatId) {
      loadMessages();
    } else {
      setMessages([]);
    }
  }, [chatId]);

  const loadMessages = async () => {
    try {
      const data = await fetchChatMessages(chatId as string);
      setMessages(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Erro ao carregar mensagens:", error);
      setMessages([]);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() && !fileId) return;

    setIsLoading(true);

    try {
      const response = await sendMessage(
        chatId,
        inputValue || "Arquivo enviado",
        fileId
      );

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", content: response.userMessage.content },
        { sender: "assistant", content: response.chatGptMessage.content },
      ]);

      onChatCreated(response.chatId);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }

    setInputValue("");
    setIsLoading(false);
  };

  const handleFileUpload = async (file: File) => {
    try {
      const response = await uploadFile(file);
      setFileId(response.fileId);
      onChatCreated(response.chatId);
    } catch (error) {
      console.error("Erro ao enviar arquivo:", error);
    }
  };

  return (
    <S.ChatContainer>
      <S.MessagesContainer>
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <S.Message key={index} sender={msg.sender}>
              <S.MessageHeader>
                {msg.sender === "user" ? <FaUser size={16} /> : <FaRobot size={16} />}
              </S.MessageHeader>
              {msg.content}
            </S.Message>
          ))
        ) : (
          <S.EmptyStateText>
            <FaRegFileAlt size={32} />
            <h3>Comece a fazer perguntas sobre seu documento</h3>
            <p>Carregue um documento e faça perguntas para obter insights e análises.</p>
          </S.EmptyStateText>
        )}
      </S.MessagesContainer>

      <S.InputContainer>
        {chatId ? (
          <>
            <S.TextAreaContainer>
              <S.TextArea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite sua mensagem..."
              />
            </S.TextAreaContainer>

            <S.SendButton onClick={handleSendMessage} disabled={isLoading || !inputValue.trim()}>
              {isLoading ? <S.CircularProgress /> : "Enviar"}
            </S.SendButton>
          </>
        ) : (
          <Dropzone onFileUploaded={handleFileUpload} />
        )}
      </S.InputContainer>
    </S.ChatContainer>
  );
};

export default Chatbox;
