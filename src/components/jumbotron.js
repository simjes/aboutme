import React from 'react';
import styled from 'styled-components';
import { MD } from '../theme';

const Root = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  color: ${props => props.theme.primaryTextColor};
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const Content = styled.div`
  position: absolute;
  text-align: center;
  pointer-events: all;
`;

const H1 = styled.h1`
  padding: 10px;
  font-size: 4rem;
  margin: 0;

  @media (max-width: ${MD}) {
    font-size: 2rem;
  }
`;

const H2 = styled.h2`
  padding: 10px;
  font-size: 1.5rem;
  margin: 0;
  font-family: 'Indie Flower', cursive;
  font-style: italic;
`;

const Jumbotron = () => {
  return (
    <Root>
      <Content>
        <H1>Simon Jespersen</H1>
        <H2>Dark theme everything</H2>
      </Content>
    </Root>
  );
};

export default Jumbotron;
