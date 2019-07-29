import React from 'react';
import styled from 'styled-components';
import { MD } from '../../theme';

const Jumbotron = () => (
  <Root>
    <Content>
      <H1>Simon Jespersen</H1>
      <Quote>Dark theme everything</Quote>
    </Content>
  </Root>
);

export default Jumbotron;

const Root = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
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

const Quote = styled.q`
  font-size: 1.5rem;

  @media (max-width: ${MD}) {
    font-size: 1rem;
  }
`;
