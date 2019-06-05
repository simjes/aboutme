import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <Root>
    <Quote tabIndex="0">Dark theme everything</Quote>

    <small>
      <a
        href="https://icons8.com/icon/44019/linkedin"
        title="https://icons8.com/icon/44019/linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn icon by Icons8
      </a>
    </small>

    <small>
      <a
        href="https://icons8.com/icon/52539/github"
        title="https://icons8.com/icon/52539/github"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub icon by Icons8
      </a>
    </small>

    <small>
      <a
        href="https://icons8.com/icon/38517/stack-overflow-filled"
        title="https://icons8.com/icon/38517/stack-overflow-filled"
        target="_blank"
        rel="noopener noreferrer"
      >
        Stack Overflow Filled icon by Icons8
      </a>
    </small>
  </Root>
);

export default Footer;

const Root = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 50px;
`;

const Quote = styled.q`
  font-family: 'Indie Flower', cursive;
  font-style: italic;
  outline: none;

  &.focus-visible {
    outline: 1px dotted ${props => props.theme.tertiaryColor};
  }
`;
