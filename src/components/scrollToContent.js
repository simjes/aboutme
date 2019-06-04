import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { MD } from '../theme';

const ScrollToContent = () => (
  <Root
    aria-label="Scroll to content"
    onClick={() =>
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    }
  >
    <FontAwesomeIcon icon={faArrowDown} size="2x" />
  </Root>
);

export default ScrollToContent;

const Root = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 100px;
  position: absolute;
  bottom: 0;
  right: 10%;
  z-index: 4;
  color: ${props => props.theme.primaryTextColor};
  background: ${props => props.theme.backgroundColor};
  border: none;

  svg {
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    svg {
      transform: scale(1.2);
    }
  }

  @media (max-width: ${MD}) {
    width: 60px;
    height: 80px;
  }
`;
