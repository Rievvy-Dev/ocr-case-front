import styled from 'styled-components'

export const SubmitButton = styled.button`
  padding: 12px;
  background-color: #3A5B22;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 13px;
  cursor: pointer;
  transition: 0.3s ease;
  width: 100%;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background-color:rgb(69, 116, 36);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
