import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { MD } from '../theme';

const H1 = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: ${props => props.theme.primaryTextColor};

  @media (max-width: ${MD}) {
    font-size: 2rem;
  }
`;

const SectionTitle = ({ title, className }) => {
  return <H1 className={className}>{title}</H1>;
};

SectionTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

SectionTitle.defaultProps = {
  className: '',
};

export default SectionTitle;
