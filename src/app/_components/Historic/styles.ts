import styled from "styled-components";

export const HistoricContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  background:hsla(0, 0.00%, 0.00%, 0.83);
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const PdfItem = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  background-color: ${({ selected }) => (selected ? "#3A5B22" : "transparent")};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #000000;
  }
`;

export const PdfTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const DeleteButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: darkred;
  }
`;
