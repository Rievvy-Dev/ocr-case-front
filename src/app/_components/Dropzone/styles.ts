"use client";

import styled from "styled-components";

export const DropboxContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 200px;
  border: 2px dashed #007bff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #007bff;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    background-color: #f0f8ff;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RemoveButton = styled.button`
  margin-top: 10px;
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;
