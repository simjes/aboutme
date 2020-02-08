/* eslint-disable */
// TODO: Remove lint disable
import React, { useState, useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
} from 'react-spring';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import Post from '../components/post'

export const pageQuery = graphql`
  query($id: ID!) {
    fauna {
      findEventByID(id: $id) {
        name
        startDate
        endDate
      }
      postsByEventId(id: $id) {
        imageUrl
        name
        published
      }
    }
  }
`;
export default function Template({
  data, // this prop will be injected by the GraphQL query
}) {
  // const springRef = useRef();

  const { fauna } = data;
  const event = fauna.findEventByID;
  const posts = fauna.postsByEventId;

  // const { size, opacity, ...rest } = useSpring({
  //   ref: springRef,
  //   config: config.stiff,
  //   from: { size: '20%', background: 'hotpink' },
  //   to: {
  //     size: open ? '100%' : '20%',
  //     background: open ? 'white' : 'hotpink',
  //   },
  // });


  // TODO - SEO - react helm
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <h1>{event.name}</h1>
        <Gallery>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </Gallery>
      </Root>
    </ThemeProvider>
  );
}

const Root = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10em;
  height: 100%;
`;

const Gallery = styled.ul`
  --cell-size: 150px;
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--cell-size));
  grid-auto-rows: var(--cell-size);
  grid-auto-flow: dense;
  margin: 0;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  flex: 1 1 auto;
`;


