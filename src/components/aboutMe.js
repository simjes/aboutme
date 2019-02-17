import React from "react";
import styled from "styled-components";
import Information from "./information";
import ProfilePicture from "./profilePicture";
import Icon from "./Icons";

const Root = styled.div`
  margin-top: 2rem;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;

  > :not(:first-child) {
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    margin-left: 0;

    > :first-child {
      margin-top: 2rem;
    }
  }
`;

const ReachMe = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 3rem;
`;

const AboutMe = () => {
  return (
    <Root>
      <Profile>
        <ProfilePicture style={{ borderRadius: "50%" }} />

        <Details>
          <Information label="Name" information="Simon Jespersen" />

          <Information label="Email" information="simjes91@me.com" />

          <Information label="Company" information="Olavstoppen" />

          <Information label="Location" information="Stavanger, Norway" />
        </Details>
      </Profile>

      <ReachMe>
        <Icon type="github" />
      </ReachMe>
    </Root>
  );
};

export default AboutMe;
