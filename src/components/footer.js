import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Root>
      <Quote tabIndex='0'>Dark theme everything</Quote>
    </Root>
  );
};

export default Footer;

const Root = styled.footer`
  display: flex;
  justify-content: center;
  font-family: 'Indie Flower', cursive;
  font-style: italic;
  padding: 100px 50px;
`;

const Quote = styled.div`
  outline: none;

  &.focus-visible {
    outline: 1px dotted ${props => props.theme.secondaryColor};
  }
`;
