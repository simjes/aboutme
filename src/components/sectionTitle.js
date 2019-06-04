import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { MD } from '../theme';

const SectionTitle = ({ title, className }) => (
  <H2 className={className}>{title}</H2>
);

SectionTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

SectionTitle.defaultProps = {
  className: '',
};

export default SectionTitle;

const H2 = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: ${props => props.theme.primaryTextColor};

  @media (max-width: ${MD}) {
    font-size: 2rem;
  }
`;
