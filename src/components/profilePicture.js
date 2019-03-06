import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const Image = styled(Img)`
  border-radius: 50%;
`;

const profilePictureQuery = graphql`
  query {
    profilePicture: file(relativePath: { eq: "profilePicture.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const ProfilePicture = () => {
  const data = useStaticQuery(profilePictureQuery);

  return (
    <Image
      alt='Profile picture'
      fixed={data.profilePicture.childImageSharp.fixed}
    />
  );
};
export default ProfilePicture;
