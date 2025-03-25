import styled from "styled-components";

export const DropzoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  border: 2px dashed #ccc;
  border-radius: 12px;
  background-color: hsla(0, 0.00%, 0.00%, 0.83);
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

export const UploadActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const UploadButton = styled.div`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
`;