"use client"

import styled from 'styled-components'
import Image from 'next/image'

export const PageContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #FFFFFF;
    height: 100vh;
    width: 100vw;
`;

export const ContentContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  overflow: hidden; 
`;

export const StyledImage = styled(Image)`
  object-fit: cover; 
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2.5rem;
    width: 60%;
    height: auto;
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: #000000;
    width: 100%;
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
`;

export const Register = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.5rem;

  p {
    font-size: 0.875rem;
    color: #000000;
  }  
`;