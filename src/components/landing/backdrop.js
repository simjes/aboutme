import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const BACKGROUND_PICTURE_QUERY = graphql`
  query {
    backgroundPicture: file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Backdrop = () => {
  const data = useStaticQuery(BACKGROUND_PICTURE_QUERY);

  return (
    <Image
      alt="Background picture"
      fluid={data.backgroundPicture.childImageSharp.fluid}
    />
  );
};

export default Backdrop;

const Image = styled(Img)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;
