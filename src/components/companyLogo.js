import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { string } from 'prop-types';
import React from 'react';

const renderImage = file => <Img fluid={file.node.childImageSharp.fluid} />;

const CompanyLogo = props => (
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

CompanyLogo.propTypes = {
  src: string.isRequired,
};

export default CompanyLogo;
