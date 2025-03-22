"use client"

import Chatbox from '../_components/Chatbox';
import Dropbox from '../_components/Dropbox';
import Historic from '../_components/Historic';
import * as S from './styles'

export default function Home() {
  return (
    <S.PageContainer>
      <Historic></Historic>
      <Dropbox></Dropbox>
      <Chatbox></Chatbox>
    </S.PageContainer>
  );
}
