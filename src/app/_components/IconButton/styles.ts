"use client"

import styled from 'styled-components'

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  color: #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: 0.3s ease;

  &:hover {
    background: rgba(0, 123, 255, 0.1);
  }

  &:active {
    background: rgba(0, 123, 255, 0.2);
  }
`;