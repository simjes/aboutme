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
      <Post>
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
        <div>
          <h1>{event.name}</h1>
          <Gallery>{postsWithSize.map(generatePost)}</Gallery>
        </div>
      </Root>
    </ThemeProvider>
  );
}

const Root = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10em;
`;

const Post = styled.li`
  max-width: ${props => props.theme.maxWidth};
`;

const Gallery = styled.ul`
  display: grid;
  margin: 0;
`;
