"use client";

import styled from "styled-components";

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: hsla(0, 0%, 10%, 0.9);
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 1rem 0;
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  background: #1e1e1e;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
`;

export const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  background: #1e1e1e;
  overflow-y: auto;
`;

export const HistoricContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #444 #1e1e1e;
  width: 100%;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 10px;
  }
`;

export const PdfItem = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  background-color: ${({ selected }) => (selected ? "#3A5B22" : "transparent")};
  color: ${({ selected }) => (selected ? "#fff" : "#bbb")};
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #292929;
  }
`;

export const NewChatButton = styled.button`
  background: #008cba;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  transition: 0.3s ease;

  &:hover {
    background: #0073a8;
  }
`;

export const DeleteButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: darkred;
  }
`;