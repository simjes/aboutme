/* eslint-disable */
// TODO: Remove lint disable
import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Post = ({post}) => {
  const [size, setSize] = useState({});

  useEffect(() => {
    const randomNumber = limit => Math.floor(Math.random() * limit) + 1;

    setSize({
      height: randomNumber(4),
      width: randomNumber(4),
    });
  }, [post]);

  return (
    <Root className={`h${size.height} w${size.width}`}>
      <button
        alt="Expand image"
        // disabled={!!openIndex}
        // onClick={() => expand(index)}
      >
        <img src={post.imageUrl} />
      </button>
    </Root>
  );
};


export default Post;

const Root = styled.li`
  list-style: none;
  margin: 0;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;

  button {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    margin: 0;
    padding: 0;

    &:active {
      transform: none;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.h2 {
    grid-column: span 2;
  }

  &.h3 {
    grid-column: span 3;
  }

  &.h4 {
    grid-column: span 4;
  }

  &.w2 {
    grid-row: span 2;
  }

  &.w3 {
    grid-row: span 3;
  }

  &.w4 {
    grid-row: span 4;
  }
`;
