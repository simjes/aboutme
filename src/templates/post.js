/* eslint-disable */
// TODO: Remove lint disable
import React from 'react';
import { graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

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
  const { fauna } = data;
  const event = fauna.findEventByID;
  const posts = fauna.postsByEventId;

  const generatePost = ({ height, width, post }) => {
    return (
      <Post className={`h${height} w${width}`}>
        <img src={post.imageUrl} />
      </Post>
    );
  };

  const randomNumber = limit => Math.floor(Math.random() * limit) + 1;

  const postsWithSize = Array.from(posts, post => ({
    height: randomNumber(4),
    width: randomNumber(4),
    post,
  }));

  // TODO - SEO - react helm
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <h1>{event.name}</h1>
        <Gallery>{postsWithSize.map(generatePost)}</Gallery>
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
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
  margin: 0;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  flex: 1 1 auto;
`;


const Post = styled.li`
  list-style: none;
  margin: 0;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;

  img {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
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

