import React from 'react';
import styled from 'styled-components';
import Name from './Name';

const HeaderContainer = styled.div`
  height: 100vh;
  background-color: #011627;
  padding: 30px;
  position: relative;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Name />
    </HeaderContainer>
  )
}