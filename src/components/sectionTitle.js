import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { MD } from '../theme';

const Root = styled.div`
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 4rem;
  color: ${props => props.theme.primaryColor};

  @media (max-width: ${MD}) {
    font-size: 2rem;
  }
`;

const SectionTitle = ({ title }) => {
  return (
    <Root>
      <H1>{title}</H1>
      <hr />
    </Root>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
