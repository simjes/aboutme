import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import AboutMe from '../components/aboutMe';
import Footer from '../components/footer';
import InfoGrid from '../components/infoGrid';
import LandingHeader from '../components/landingHeader/landingHeader';
import Projects from '../components/projects';
import Section from '../components/section';
import SEO from '../components/seo';
import { theme } from '../theme';

// The index page is currently very custom compared
// to the rest of the layout, so it does not use Layout component
const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title="Home" keywords={[`aboutme`, `simjes`, `react`]} />
      <LandingHeader />

      <Content>
        <Main>
          <Section title="About me️" highlight>
            <AboutMe />
          </Section>

          <Section title="Work & Education">
            <InfoGrid />
          </Section>

          <Projects />
        </Main>

        <Footer />
      </Content>
    </>
  </ThemeProvider>
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
