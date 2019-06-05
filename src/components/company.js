import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import CompanyLogo from './companyLogo';

const Company = ({ logoFile, name, position, period, active }) => (
  <Root>
    <Content>
      <LogoContainer>
        <CompanyLogo src={logoFile} />
      </LogoContainer>
      <Name>{name}</Name>
      <div>{position}</div>
      <div>{period}</div>
      <Hr active={active} tabIndex="0" />
    </Content>
  </Root>
);

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
`;

const Hr = styled.hr`
  margin-top: 18px;
  margin-bottom: 0;
  background: ${props =>
    props.active
      ? `${props.theme.primaryColor}`
      : `${props.theme.secondaryColor}`};
  height: 4px;
  width: 150px;
  outline: none;

  &.focus-visible {
    background: ${props => props.theme.tertiaryColor};
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
