"use client";

import styled from 'styled-components'

export const ComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #FFFFFF;
    gap: 1rem;
    padding: 1rem;
`;

export const Title = styled.h1`
    font-size: x-large;
    color: #000000;
`;

export const DropboxContainer = styled.section``;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 8px;
`;

export const PDFContainer = styled.div`
  width: 80%;  
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  overflow: hidden;
`;

export const PDFWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const ButtonContainer = styled.section`
  margin-top: 1rem;
`;
