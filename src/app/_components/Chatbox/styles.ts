"use client";

import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-left: 1px solid #ddd;
  background: hsla(0, 0%, 10%, 0.9);
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Message = styled.div<{ sender: string }>`
  background: hsla(0, 3.00%, 25.90%, 0.36);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  margin: 0.5rem 0;
  align-self: ${(props) => (props.sender === "user" ? "flex-end" : "flex-start")};
  max-width: 60%;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 3rem;
  border-top: 1px solid #ddd;
  align-items: center;
  justify-content: center;
`;

export const TextInputContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const SendButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #007bff;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  color: #007bff;
`;
