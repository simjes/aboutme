import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import ProfilePicture from './profilePicture';
import Github from '../images/icons8-github-filled.svg';
import Linkedin from '../images/icons8-linkedin-filled.svg';
import { MD } from '../theme';

const QUERY = graphql`
  query {
    affPicture: file(relativePath: { eq: "food.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fauna: fauna {
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

const Contact = () => {
  const { affPicture, fauna } = useStaticQuery(QUERY);

  return (
    <Root>
      <ContentWrapper>
        <Content>
          <ProfilePicture />

          <Details>
            <div>{fauna.userByEmail.name}</div>
            <div>
              <a href={`mailto:${fauna.userByEmail.email}`}>
                {fauna.userByEmail.email}
              </a>
            </div>
            <div>{fauna.userByEmail.location}</div>
          </Details>

          <Links>
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
          </Links>
        </Content>
      </ContentWrapper>

      <Img
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
        alt="Current project background"
        fluid={affPicture.childImageSharp.fluid}
      />
      <Overlay />
    </Root>
  );
};

export default Contact;

const Root = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 500px));
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 200px 20px;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(60deg, #12c2e999, #c471ed99, #f64f5999);
`;

const Content = styled.div`
  display: flex;
  padding: 20px 40px;
  /* Fallback background for Edge */
  background: ${props => props.theme.backgroundColor};
  background: ${props => props.theme.backgroundColor}ee;
  outline: none;
  border-radius: 20px;
  position: relative;
  box-shadow: 0px 7px 10px ${props => props.theme.backgroundColor}ee;

  &.focus-visible {
    border-color: ${props => props.theme.tertiaryColor};
  }

  @media (max-width: ${MD}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: 50px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  color: ${props => props.theme.secondaryTextColor};

  div:first-child {
    font-size: 1.4rem;
    margin-bottom: 12px;
    color: ${props => props.theme.primaryTextColor};
  }

  a {
    color: ${props => props.theme.secondaryTextColor};
    text-decoration: none;
    transition: color 250ms ease-in-out, transform 150ms ease;

    &:hover {
      color: ${props => props.theme.primaryColor};
    }
  }

  @media (max-width: ${MD}) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

const Links = styled.div`
  position: absolute;
  right: 16px;
  bottom: 6px;

  @media (max-width: ${MD}) {
    bottom: 6px;
    right: auto;
    left: auto;
  }

  a {
    height: 30px;
    display: inline-block;
    margin-left: 10px;

    @media (max-width: ${MD}) {
      margin: 0 5px;
    }

    .icon {
      height: 30px;
      width: 30px;
      transition: fill 250ms ease-in-out, transform 150ms ease;

      &:hover {
        fill: ${props => props.theme.primaryColor};
      }
    }
  }
`;
