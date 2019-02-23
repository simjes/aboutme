import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { CompanyLogo } from './companyLogos';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const LogoContainer = styled.div`
  height: 150px;
  width: 150px;

  img {
    border-radius: 50%;
    filter: ${props => (props.active ? 'unset' : 'grayscale(100%)')};
  }
`;

const Name = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const Company = ({ logoFile, name, position, period, active }) => {
  return (
    <Root>
      <LogoContainer active={active}>
        <CompanyLogo src={logoFile} />
      </LogoContainer>
      <Name>{name}</Name>
      <div>{position}</div>
      <div>{period}</div>
    </Root>
  );
};

Company.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Company;
