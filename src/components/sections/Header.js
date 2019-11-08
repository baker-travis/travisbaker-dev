import React from 'react';
import styled from 'styled-components';
import Name from '../Name';

const HeaderContainer = styled.header`
  height: 100vh;
  padding: ${({ theme: { spacing: { xl } } }) => xl};
  position: relative;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Name />
    </HeaderContainer>
  )
}