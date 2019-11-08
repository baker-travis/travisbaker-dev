import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: ${({ theme: { spacing: { xl } } }) => xl};
  margin: auto;

  :nth-of-type(odd) {
    background-color: ${({ theme: { foreground } }) => foreground};
    color: ${({ theme: { background } }) => background};
  }

  h2 {
    font-size: 40px;
  }
`;

const InnerSection = styled.div`
  width: ${({ theme: { screens: { desktop } } }) => desktop};
  margin: auto;
`;

export default function Section({ dark = false, children }) {
  return (
    <StyledSection dark={dark}>
      <InnerSection>{children}</InnerSection>
    </StyledSection>
  );
}
