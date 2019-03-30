import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Information = ({ label, text }) => {
  return (
    <div>
      <Label htmlFor={label}>{label}</Label>
      <Detail id={label}>{text}</Detail>
    </div>
  );
};

Information.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Information;

const Label = styled.label`
  color: ${props => props.theme.labelTextColor};
`;

const Detail = styled.div`
  color: ${props => props.theme.primaryTextColor};
  font-weight: bold;
  font-size: 1.2rem;
`;
