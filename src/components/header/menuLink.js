import React from 'react';
import { string, node, shape } from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Link } from 'gatsby';

const MenuLink = ({ children, to, theme }) => (
  <Li>
    <StyledLink to={to} activeStyle={{ color: theme.primaryColor }}>
      {children}
    </StyledLink>
  </Li>
);

MenuLink.propTypes = {
  children: node.isRequired,
  to: string.isRequired,
  theme: shape({
    primaryColor: string,
  }).isRequired,
};

export default withTheme(MenuLink);

const StyledLink = styled(Link)`
  font-size: 0.7rem;
  text-decoration: none;
  color: ${props => props.theme.primaryTextColor};
  transition: color 250ms ease-in-out, transform 150ms ease;
  font-family: 'lazer84';
  letter-spacing: 2px;

  &:hover,
  &:focus {
    color: ${props => props.theme.primaryColor};
  }
`;

const Li = styled.li`
  list-style: none;
  margin: 0;
  margin-left: 15px;
`;
