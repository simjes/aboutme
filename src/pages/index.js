import React from 'react';
import styled from 'styled-components';
import AboutMe from '../components/aboutMe';
import InfoGrid from '../components/infoGrid';
import Layout from '../components/layout';
import Section from '../components/section';
import SEO from '../components/seo';

const WorkAndEducation = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${props => props.theme.foregroundColor};
`;

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`aboutme`, `simjes`, `react`]} />

    <Section title='About me'>
      <AboutMe />
    </Section>

    <WorkAndEducation>
      <Section title='Work & Education'>
        <InfoGrid />
      </Section>
    </WorkAndEducation>
  </Layout>
);

export default IndexPage;
