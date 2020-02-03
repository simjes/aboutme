/* eslint-disable */
// TODO: Remove lint disable
import React from 'react';
import { graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

export const pageQuery = graphql`
  query($id: ID!) {
    fauna {
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
  const posts = fauna.postsByEventId;

  // TODO - SEO - react helm
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Post>
          {posts.map(post => (
            <article>
              <h2>{post.name}</h2>
              <img src={post.imageUrl} />
            </article>
          ))}
        </Post>
      </Root>
    </ThemeProvider>
  );
}

const Root = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10em;
`;

const Post = styled.article`
  max-width: ${props => props.theme.maxWidth};
`;
