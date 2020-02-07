import { string } from 'prop-types';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Tag = ({ tag }) => {
  const [hover, setHover] = useState(false);
  const props = useSpring({ transform: hover ? 'scale(1.1)' : 'scale(1)' });

  return (
    <animated.div
      style={props}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Content>{tag}</Content>
    </animated.div>
  );
};

Tag.propTypes = {
  tag: string.isRequired,
};

export default Tag;

const Content = styled.li`
  list-style: none;
  font-size: 0.7rem;
  margin: 10px;
  padding: 0px 10px;
  border-radius: 4px;
  background: ${props => props.theme.foregroundColor};
  border: 1px solid ${props => props.theme.primaryColor};
`;
