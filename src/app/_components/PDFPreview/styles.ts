import styled from "styled-components";

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 8px;
`;

export const ButtonContainer = styled.div`
  margin-top: 16px;
`;

export const PreviewContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;
