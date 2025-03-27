import styled, { keyframes } from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-left: 1px solid #ddd;
  background: hsla(0, 0%, 10%, 0.9);
  padding: 0 1rem;
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const EmptyStateText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Message = styled.div<{ sender: string }>`
  background: ${(props) => (props.sender === "user" ? "#007bff" : "#444")};
  color: ${(props) => (props.sender === "user" ? "#fff" : "#ddd")};
  padding: 0.75rem 1rem;
  border-radius: 12px;
  margin: 0.5rem 0;
  align-self: ${(props) => (props.sender === "user" ? "flex-end" : "flex-start")};
  max-width: 60%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.85rem;
  font-weight: bold;
  color: #ddd;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid #ddd;
  align-items: center;
  justify-content: center;
`;

export const TextAreaContainer = styled.div`
  flex: 1;
  display: flex;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  min-height: 40px;
  max-height: 200px;
  overflow-y: auto;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
`;

export const SendButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;

  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const CircularProgress = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
`;
