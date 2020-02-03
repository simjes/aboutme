import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Github from '../images/icons8-github-filled.svg';
import Linkedin from '../images/icons8-linkedin-filled.svg';
import { MD } from '../theme';
import Information from './information';
import ProfilePicture from './profilePicture';

const ABOUT_ME_QUERY = graphql`
  query {
    fauna {
      userByEmail(email: "me@simjes.dev") {
        name
        location
        linkedin
        github
        email
      }
    }
  }
`;

const AboutMe = () => {
  const { fauna } = useStaticQuery(ABOUT_ME_QUERY);

  return (
    <Root>
      <Profile>
        <ProfilePicture />

        <Details>
          <Information label="Name" text={fauna.userByEmail.name} />

          <Information label="Email" text={fauna.userByEmail.email} />

          <Information label="Location" text={fauna.userByEmail.location} />

          <ReachMe>
            <a
              href={fauna.userByEmail.github}
              title={fauna.userByEmail.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="icon" alt="Github logo" />
            </a>

            <a
              href={fauna.userByEmail.linkedin}
              title={fauna.userByEmail.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="icon" alt="Linkedin logo" />
            </a>
          </ReachMe>
        </Details>
      </Profile>
    </Root>
  );
};

export default AboutMe;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${MD}) {
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

  @media (max-width: ${MD}) {
    margin-left: 0;

    > :first-child {
      margin-top: 2rem;
    }
  }
`;

const ReachMe = styled.div`
  display: flex;

  a {
    height: 40px;

    &:not(:first-child) {
      margin-left: 20px;
    }
  }

  .icon {
    height: 40px;
    width: 40px;
  }

  @media (max-width: ${MD}) {
    justify-content: center;

    a {
      margin: 0;
    }
  }
`;
