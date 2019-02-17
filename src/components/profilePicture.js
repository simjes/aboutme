import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

const Image = styled(Img)`
  border-radius: 50%;
  border: 10px solid ${props => props.theme.primaryColor}aa;
`;

const profilePictureQuery = graphql`
  query {
    profilePicture: file(relativePath: { eq: "profilePicture.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 280) {
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
      alt="Profile picture"
      fixed={data.profilePicture.childImageSharp.fixed}
    />
  );
};
export default ProfilePicture;
