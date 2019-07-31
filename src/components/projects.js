import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import SectionTitle from './sectionTitle';

const PICTURE_QUERY = graphql`
  query {
    affPicture: file(relativePath: { eq: "food.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Projects = () => {
  const image = useStaticQuery(PICTURE_QUERY);

  return (
    <Root>
      <ContentWrapper>
        <Content tabIndex="0">
          <SectionTitle title="Current Project" />

          <p>I am currently working on an unnamed food application.</p>

          <p>
            The frontend is built with Next.js and Apollo Client, while the
            backend is written in Node with Apollo Server and Prisma
            <span role="img" aria-label="heart emoji">
              ❤️
            </span>
          </p>

          <p>Authentication is done using Auth0.</p>
        </Content>

        <Content tabIndex="0">
          <SectionTitle title="The Playground" />
          <p>
            The <Link to="/playground/">playground</Link> is a{' '}
            <a
              href="https://github.com/simjes/playground"
              title="https://github.com/simjes/playground"
              target="_blank"
              rel="noopener noreferrer"
            >
              repository
            </a>{' '}
            that will contain small and simple applications to test out new
            technologies.
          </p>
          <p style={{ marginBottom: 0 }}>Current playground equipment:</p>
          <a
            href="https://elm-slide.simjes.dev"
            title="https://elm-slide.simjes.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elm-slide
          </a>
          {', '}
          <a
            href="https://vue-seesaw.simjes.dev/"
            title="https://vue-seesaw.simjes.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vue-seesaw
          </a>
          {', '}
          <a
            href="https://react-jungle-gym.simjes.dev/"
            title="https://react-jungle-gym.simjes.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React-jungle-gym
          </a>
          {', '}
          <a
            href="https://svelte-swing.simjes.dev/blog"
            title="https://svelte-swing.simjes.dev/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Svelte-swing
          </a>
        </Content>
      </ContentWrapper>

      <Img
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
        alt="Current project background"
        fluid={image.affPicture.childImageSharp.fluid}
      />
      <Overlay />
    </Root>
  );
};

export default Projects;

const Root = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 450px));
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 200px 20px;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(60deg, #12c2e999, #c471ed99, #f64f5999);
`;

const Content = styled.div`
  padding: 20px;
  /* Fallback background for Edge */
  background: ${props => props.theme.backgroundColor};
  background: ${props => props.theme.backgroundColor}ee;
  border-bottom: 4px solid ${props => props.theme.secondaryColor};
  outline: none;
  border-radius: 4px;

  &.focus-visible {
    border-color: ${props => props.theme.tertiaryColor};
  }
`;
