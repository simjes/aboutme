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

  // TODO - SEO - react helm
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <h1>{event.name}</h1>
        {posts.map(post => (
          <Post>
            <h2>{post.name}</h2>
            <img src={post.imageUrl} />
          </Post>
        ))}
      </Root>
    </ThemeProvider>
  );
}

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10em;
`;

const Post = styled.article`
  max-width: ${props => props.theme.maxWidth};
`;
