import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bool, func, oneOf } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Navigation = ({ position, onClick, disabled }) => {
  return (
    <Button position={position} onClick={onClick} disabled={disabled}>
      {position === 'left' && <FontAwesomeIcon icon={faArrowLeft} size="2x" />}
      {position === 'right' && (
        <FontAwesomeIcon icon={faArrowRight} size="2x" />
      )}
    </Button>
  );
};

Navigation.propTypes = {
  position: oneOf(['left', 'right']).isRequired,
  onClick: func.isRequired,
  disabled: bool,
};

Navigation.defaultProps = {
  disabled: false,
};

export default Navigation;

const Button = styled.button`
  position: absolute;
  z-index: 10;
  background: none;
  border-style: none;
  padding: 20px;
  margin: 20px;
  color: white;
  transition: color 250ms ease-in-out;

  left: ${({ position }) => (position === 'left' ? 0 : 'unset')};
  right: ${({ position }) => (position === 'right' ? 0 : 'unset')};

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;
