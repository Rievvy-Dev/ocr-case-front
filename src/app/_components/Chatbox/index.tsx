"use client";

import { useEffect, useState } from "react";
import * as S from "./styles";
import TextInput from "../TextInput";
import Dropzone from "../Dropzone";
import { fetchChatMessages, sendMessage } from "@/services/api";

interface ChatboxProps {
  chatId?: string | null;
  onChatCreated: (chatId: string) => void;
}


const Chatbox = ({ chatId, onChatCreated }: ChatboxProps) => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [inputValue, setInputValue] = useState("");
  const [fileId, setFileId] = useState<string | null>(null);
  
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

    try {
      const response = await sendMessage(
        chatId,
        inputValue || "Arquivo enviado",
        fileId
      );
      setMessages([
        ...messages,
        { sender: "user", text: response.userMessage.content },
        { sender: "assistant", text: response.chatGptMessage.content },
      ]);
      onChatCreated(response.chatId);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }

    setInputValue("");
  };

  return (
    <S.ChatContainer>
      <S.MessagesContainer>
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <S.Message key={index} sender={msg.sender}>
              {msg.text}
            </S.Message>
          ))
        ) : (
          <p>Conversa vazia. Envie uma mensagem.</p>
        )}
      </S.MessagesContainer>

      <S.InputContainer>
        {chatId ? (
          <TextInput
            value={inputValue}
            onChange={setInputValue}
            onSend={handleSendMessage}
          />
        ) : (
          <Dropzone onFileUploaded={setFileId} />
        )}
      </S.InputContainer>
    </S.ChatContainer>
  );
};

export default Chatbox;
