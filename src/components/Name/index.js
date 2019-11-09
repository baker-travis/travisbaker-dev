import React, { useRef } from 'react';
import { useRect } from '@reach/rect';
import styled from 'styled-components';
import LetterT from './LetterT';
import LetterR from './LetterR';
import LetterA from './LetterA';
import LetterV from './LetterV';
import LetterI from './LetterI';
import { NameProvider } from './NameContext';
import LetterS from './LetterS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const Container = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 1024px;
  margin: auto;
  margin-top: ${({
    theme: {
      spacing: { xl },
    },
  }) => xl};
  position: relative;
`;

const Header = styled.h1`
  padding-top: ${({
    theme: {
      spacing: { xl },
    },
  }) => xl};
  margin-top: 0;
  margin-bottom: 0;
  font-size: 80px;
  font-weight: 500;
  text-align: center;

  @media only screen and (min-width: ${({
      theme: {
        screens: { tablet },
      },
    }) => tablet}) {
    font-size: 100px;
  }

  @media only screen and (min-width: ${({
      theme: {
        screens: { desktop },
      },
    }) => desktop}) {
    font-size: 120px;
  }
`;

const AnchorIcon = styled.a`
  margin: auto;
`;

const ClickableFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin: auto;
  text-align: center;
  color: ${({ theme: { foreground } }) => foreground};
`;

export default function Name() {
  const ref = useRef();
  const rect = useRect(ref);

  return (
    <FlexContainer>
      <Header>
        <code>Hello, I'm</code> <span className="sr-only">Travis</span>
      </Header>
      <Container ref={ref}>
        {rect && (
          <NameProvider rect={rect}>
            <LetterT />
            <LetterR />
            <LetterA />
            <LetterV />
            <LetterI />
            <LetterS />
          </NameProvider>
        )}
      </Container>
      {/* Ignore screen reader accessibility issues for this "button". */}
      {/* A screen reader is not hindered by the first section taking up the whole viewport. */}
      <AnchorIcon href="#about-me">
        <ClickableFontAwesomeIcon
          icon={faChevronDown}
          size="10x"
          tabIndex="1"
        />
      </AnchorIcon>
    </FlexContainer>
  );
}
