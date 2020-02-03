import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { string } from 'prop-types';
import React from 'react';

const COMPANY_LOGO_QUERY = graphql`
  query {
    images: allFile(filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }) {
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
`;

const CompanyLogo = props => {
  const { images } = useStaticQuery(COMPANY_LOGO_QUERY);
  const image = images.edges.find(file => file.node.relativePath === props.src);

  return <Img fluid={image.node.childImageSharp.fluid} />;
};

CompanyLogo.propTypes = {
  src: string.isRequired,
};

export default CompanyLogo;
