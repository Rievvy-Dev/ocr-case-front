"use client";

import styled from "styled-components";

export const TextButton = styled.button<{ color: string; size: string }>`
  background: none;
  border: none;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  cursor: pointer;
  transition: 0.3s ease;
  text-decoration: underline;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`;