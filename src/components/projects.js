import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

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
      <ContentWrapper />

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

// const Content = styled.div`
//   padding: 20px;
//   /* Fallback background for Edge */
//   background: ${props => props.theme.backgroundColor};
//   background: ${props => props.theme.backgroundColor}ee;
//   border-bottom: 4px solid ${props => props.theme.secondaryColor};
//   outline: none;
//   border-radius: 4px;

//   &.focus-visible {
//     border-color: ${props => props.theme.tertiaryColor};
//   }
// `;
