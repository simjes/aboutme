import React from 'react';
import styled from 'styled-components';
import Github from '../images/github.svg';
import Linkedin from '../images/linkedin.svg';
import Stackoverflow from '../images/stackoverflow.svg';
import { MD } from '../theme';
import Information from './information';
import ProfilePicture from './profilePicture';

const Root = styled.div`
  margin-top: 2rem;
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
  justify-content: space-evenly;
  margin-top: 3rem;

  .icon {
    height: 50px;
    width: 50px;
  }
`;

const AboutMe = () => {
  return (
    <Root>
      <Profile>
        <ProfilePicture />

        <Details>
          <Information label='Name' text='Simon Jespersen' />

          <Information label='Email' text='simjes91@me.com' />

          <Information label='Company' text='Olavstoppen' />

          <Information label='Location' text='Stavanger, Norway' />
        </Details>
      </Profile>

      <ReachMe>
        <a
          href='https://github.com/simjes'
          title='https://github.com/simjes'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Github className='icon' alt='Github logo' />
        </a>

        <a
          href='https://stackoverflow.com/users/4478550/simjes'
          title='https://stackoverflow.com/users/4478550/simjes'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Stackoverflow className='icon' alt='Stackoverflow logo' />
        </a>

        <a
          href='https://www.linkedin.com/in/simjes/'
          title='https://www.linkedin.com/in/simjes/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Linkedin className='icon' alt='Linkedin logo' />
        </a>
      </ReachMe>
    </Root>
  );
};

export default AboutMe;
