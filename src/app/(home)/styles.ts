"use client";

import styled from "styled-components";

export const PageContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
  width: 100vw;
`;

export const Sidebar = styled.aside`
  background: #f4f4f4;
`;

export const MainContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;

export const ChatSidebar = styled.aside`
  background: #f9f9f9;
  padding: 1rem;
  overflow-y: auto;
`;
