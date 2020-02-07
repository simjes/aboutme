import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const PROFILE_PICTURE_QUERY = graphql`
  query {
    profilePicture: file(relativePath: { eq: "profilePicture.jpg" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const ProfilePicture = () => {
  const data = useStaticQuery(PROFILE_PICTURE_QUERY);

  return (
    <Image
      alt="Profile picture"
      fixed={data.profilePicture.childImageSharp.fixed}
    />
  );
};
export default ProfilePicture;

const Image = styled(Img)`
  border-radius: 50%;
  border: 5px solid ${props => props.theme.primaryColor};
`;
