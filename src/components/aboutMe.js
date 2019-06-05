import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Github from '../images/github.svg';
import Linkedin from '../images/linkedin.svg';
import Stackoverflow from '../images/stackoverflow.svg';
import { MD } from '../theme';
import Information from './information';
import ProfilePicture from './profilePicture';

const ABOUT_ME_QUERY = graphql`
  query {
    prisma {
      user(where: { email: "me@simjes.dev" }) {
        name
        email
        location
        github
        linkedin
        stackoverflow
      }
    }
  }
`;

const AboutMe = () => {
  const { prisma } = useStaticQuery(ABOUT_ME_QUERY);

  return (
    <Root>
      <Profile>
        <ProfilePicture />

        <Details>
          <Information label="Name" text={prisma.user.name} />

          <Information label="Email" text={prisma.user.email} />

          <Information label="Location" text={prisma.user.location} />
        </Details>
      </Profile>

      <ReachMe>
        <Link
          href={prisma.user.github}
          title={prisma.user.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="icon" alt="Github logo" />
        </Link>
        <Link
          href={prisma.user.stackoverflow}
          title={prisma.user.stackoverflow}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Stackoverflow className="icon" alt="Stackoverflow logo" />
        </Link>
        <Link
          href={prisma.user.linkedin}
          title={prisma.user.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="icon" alt="Linkedin logo" />
        </Link>
      </ReachMe>
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

const Link = styled.a`
  height: 40px;
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
  /* Fallback for Edge */
  justify-content: space-between;
  justify-content: space-evenly;
  width: 40%;
  margin-top: 3rem;

  .icon {
    height: 40px;
    width: 40px;
  }

  @media (max-width: ${MD}) {
    width: 80%;
  }
`;
