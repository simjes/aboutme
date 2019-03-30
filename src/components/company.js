import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { CompanyLogo } from './companyLogos';

const Company = ({ logoFile, name, position, period, active }) => {
  return (
    <Root>
      <Content active={active} tabIndex='0'>
        <LogoContainer>
          <CompanyLogo src={logoFile} />
        </LogoContainer>
        <Name>{name}</Name>
        <div>{position}</div>
        <div>{period}</div>
      </Content>
    </Root>
  );
};

Company.propTypes = {
  logoFile: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Company;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
  padding-bottom: ${props => (props.active ? '20px' : 0)};
  outline: none;
  border-bottom: 4px solid
    ${props => (props.active ? `${props.theme.primaryColor}` : 'transparent')};

  &.focus-visible {
    border-color: ${props => props.theme.secondaryColor};
  }
`;

const LogoContainer = styled.div`
  height: 150px;
  width: 150px;

  img {
    border-radius: 50%;
    background: white;
  }
`;

const Name = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
`;
