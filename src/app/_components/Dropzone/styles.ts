import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 80%;
`;

export const DropzoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  border: 2px dashed #ccc;
  border-radius: 12px;
  background-color: hsla(0, 3.50%, 27.60%, 0.83);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0073a8;
  }
`;

export const UploadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  text-align: center;
  color: #fff;
`;

export const UploadButton = styled.div`
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 50%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .spinner {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const FileName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
`;
