import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";

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
    <Img
      alt="Profile picture"
      style={{ borderRadius: "50%" }}
      fixed={data.profilePicture.childImageSharp.fixed}
    />
  );
};
export default ProfilePicture;
