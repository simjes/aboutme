import React from 'react';
import { bool, string, node, func, oneOf } from 'prop-types';
import styled from 'styled-components';

const MenuButton = ({ text, icon, type, onClick, active }) => (
  <Button onClick={onClick} type={type} active={active}>
    {icon}
    {text}
  </Button>
);

MenuButton.propTypes = {
  text: string.isRequired,
  icon: node,
  active: bool,
  type: oneOf(['button', 'submit', 'reset']),
  onClick: func.isRequired,
};

MenuButton.defaultProps = {
  type: 'button',
  icon: null,
  active: false,
};

export default MenuButton;

const Button = styled.button`
  background: none;
  font-size: 0.6rem;
  transition: color 250ms ease-in-out, transform 150ms ease;
  padding: 10px 20px;

  &:hover,
  &:focus {
    color: ${props => props.theme.primaryColor};
  }

  ${props => (props.active ? `color: ${props.theme.tertiaryColor}` : null)}
`;
