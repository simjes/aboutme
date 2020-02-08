import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const LightboxHeader = ({ title, close }) => {
  return (
    <Header>
      <H1>{title}</H1>
      <Close onClick={close}>Close</Close>
    </Header>
  );
};

LightboxHeader.propTypes = {
  title: string.isRequired,
  close: func.isRequired,
};

export default LightboxHeader;

const Header = styled.header`
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: white;
`;

const Close = styled.button`
  background: none;
  transition: color 250ms ease-in-out, transform 150ms ease;

  &:hover {
    color: ${props => props.theme.primaryColor};
  }
`;

const H1 = styled.h1`
  font-family: 'lazer84';
  color: cyan;
  text-shadow: -5px 5px 0px #e100ff;
`;
