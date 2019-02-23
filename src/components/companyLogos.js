import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const renderImage = file => {
  return <Img fluid={file.node.childImageSharp.fluid} />;
};

export const CompanyLogo = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }) =>
        renderImage(
          images.edges.find(image => image.node.relativePath === props.src),
        )
      }
    />
  );
};
