import React from 'react';
import styled from 'styled-components';
import MenuLink from './menuLink';

const Header = () => (
  <Root>
    <nav>
      <Ol>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/toolbox/">Toolbox</MenuLink>
        <MenuLink to="/playground/">Playground</MenuLink>
      </Ol>
    </nav>
  </Root>
);

export default Header;

const Root = styled.header`
  display: flex;
  justify-content: flex-end;
  background: ${props => props.theme.foregroundColor};
  padding: 10px 20px;
  z-index: 1;
`;

const Ol = styled.ol`
  margin: 0;
  display: flex;
  align-items: center;
`;
