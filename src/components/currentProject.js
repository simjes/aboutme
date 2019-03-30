import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { XS } from '../theme';
import SectionTitle from './sectionTitle';

const CurrentProject = () => {
  const image = useStaticQuery(affPictureQuery);

  return (
    <Root>
      <ContentWrapper>
        <Content tabIndex='0'>
          <SectionTitle title='Current Project' />

          <p>I am currently working on an unnamed food application.</p>

          <p>
            The frontend is built with Next.js and Apollo, while the backend is
            written in Node with Prisma
            <span role='img' aria-label='heart emoji'>
              ❤️
            </span>
          </p>

          <p>Authentication is done using Auth0.</p>
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
        alt='Current project background'
        fluid={image.affPicture.childImageSharp.fluid}
      />
      <Overlay />
    </Root>
  );
};

CurrentProject.propTypes = {};

export default CurrentProject;

const Root = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 200px 50px;

  @media (max-width: ${XS}) {
    padding: 150px 10px;
  }
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
  max-width: 500px;
  padding: 20px;
  background: ${props => props.theme.backgroundColor}ee;
  border-bottom: 4px solid ${props => props.theme.primaryColor};
  outline: none;

  @media (max-width: ${XS}) {
    max-width: 340px;
  }

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
