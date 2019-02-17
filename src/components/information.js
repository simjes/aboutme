import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Label = styled.label`
  color: gray;
`;

const Detail = styled.div`
  color: #111111;
  font-weight: bold;
  font-size: 1.2rem;
`;

// Todo: rename
const Information = ({ label, information }) => {
  return (
    <div>
      <Label htmlFor={label}>{label}</Label>
      <Detail id={label}>{information}</Detail>
    </div>
  );
};

Information.propTypes = {
  label: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired
};

export default Information;
