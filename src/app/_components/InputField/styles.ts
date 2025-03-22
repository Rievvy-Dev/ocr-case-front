"use client"

import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: 0.9rem;
    color: #000000;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid #d9d9d9;
  background-color: #FFFFFF;
  color: #000000;
  padding: 0.75rem;
  border-radius: 10px;
  font-size: 0.9rem;
  width: 100%;
`;