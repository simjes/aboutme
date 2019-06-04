import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import SectionTitle from './sectionTitle';

const CurrentProject = () => {
  const image = useStaticQuery(affPictureQuery);

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
            The playground is a{' '}
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
          <ul>
            <li>
              <a
                href="https://elm-slide.simjes.dev"
                title="https://elm-slide.simjes.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                elm-slide
              </a>
            </li>
          </ul>
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

export default CurrentProject;

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
  border-bottom: 4px solid ${props => props.theme.primaryColor};
  outline: none;

  &.focus-visible {
    border-color: ${props => props.theme.secondaryColor};
  }
`;

const affPictureQuery = graphql`
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
