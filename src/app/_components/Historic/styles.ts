import styled from "styled-components";
import { FiTrash, FiPlus } from "react-icons/fi";

export const HistoricContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: hsla(0, 0%, 10%, 0.9);
  padding: 20px;
  gap: 1.5rem;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd
`;

export const Title = styled.h2`
  font-size: 18px;
  color: #fff;
  margin: 0;
`;

export const NewChatButton = styled.button`
  background: #007bff;
  border: none;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #0056b3;
  }

  svg {
    color: white;
    width: 20px;
    height: 20px;
  }
`;

export const PdfList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PdfItem = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? "#1E90FF" : "transparent")};
  cursor: pointer;
  color: white;
  transition: background-color 0.3s ease-in-out;
  gap: 1rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const PdfContentText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  align-items: center;
  justify-content: flex-start;
`;

export const PdfTitle = styled.p`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`;

export const ActionButtons = styled.div`
display: flex;
flex-direction: row;
gap: 0.25rem;
align-items: center;
justify-content: flex-end;
`;

export const DownloadButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  margin-right: 10px; 
  transition: color 0.2s;

  &:hover {
    color: green;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: red;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;