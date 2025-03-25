import { useEffect, useState } from "react";
import * as S from "./styles";
import TextInput from "../TextInput";
import Dropzone from "../Dropzone";
import { fetchChatMessages, sendMessage, uploadFile } from "@/services/api";

interface ChatboxProps {
  chatId?: string | null;
  onChatCreated: (chatId: string) => void;
}

const Chatbox = ({ chatId, onChatCreated }: ChatboxProps) => {
  const [messages, setMessages] = useState<{ sender: string; content: string }[]>(
    []
  );
  const [inputValue, setInputValue] = useState("");
  const [fileId, setFileId] = useState<string | null>(null);
  const [summary, setSummary] = useState<string | null>(null); 

  useEffect(() => {
    if (chatId) {
      loadMessages();
    } else {
      setMessages([]);
      setSummary(null);
    }
  }, [chatId]);

  const loadMessages = async () => {
    try {
      const data = await fetchChatMessages(chatId as string);
      setMessages(Array.isArray(data) ? data : []);

      const systemMessage = data.find((msg) => msg.sender === "system");
      if (systemMessage) {
        setSummary(systemMessage.content);
      }
    } catch (error) {
      console.error("Erro ao carregar mensagens:", error);
      setMessages([]);
      setSummary(null);
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
              {msg.content}
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
          <Dropzone onFileUploaded={handleFileUpload} />
        )}
      </S.InputContainer>
    </S.ChatContainer>
  );
};

export default Chatbox;
