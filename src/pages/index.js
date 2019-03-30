import React from 'react';
import styled from 'styled-components';
import AboutMe from '../components/aboutMe';
import CurrentProject from '../components/currentProject';
import Footer from '../components/footer';
import InfoGrid from '../components/infoGrid';
import Layout from '../components/layout';
import Section from '../components/section';
import SEO from '../components/seo';
require('focus-visible');

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`aboutme`, `simjes`, `react`]} />

    <Content>
      <Main>
        <Section title='About me 👷‍♂️' highlight>
          <AboutMe />
        </Section>

        <Section title='Work & Education 📚'>
          <InfoGrid />
        </Section>

        <CurrentProject />
      </Main>

      <Footer />
    </Content>
  </Layout>
);

export default IndexPage;

const Content = styled.div`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.backgroundColor};
`;

const Main = styled.main`
  width: 100%;
`;
