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
        <InfoGrid experience={tempExperience} />
      </Section>
    </WorkAndEducation>
  </Layout>
);

export default IndexPage;

const tempExperience = [
  {
    id: 123123,
    logoFile: 'olavstoppen.png',
    name: 'Olavstoppen',
    position: 'Frontend developer',
    period: '2019-current',
    active: true,
  },
  {
    id: 666,
    logoFile: 'capgemini.jpg',
    name: 'Capgemini Norway',
    position: 'Fullstack developer',
    period: '2017-2019',
    active: false,
  },
  {
    id: 696,
    logoFile: 'uio.png',
    name: 'University of Oslo',
    position: 'Master of Informatics: Programming and Network',
    period: '2015-2017',
    active: false,
  },
  {
    id: 969,
    logoFile: 'uis.png',
    name: 'University of Stavanger',
    position: 'Bachelor in Computer Engineering',
    period: '2012-2015',
    active: false,
  },
];
