import React from 'react';
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

    <Section title='About me 👷‍♂️' highlight>
      <AboutMe />
    </Section>

    <Section title='Work & Education 📚'>
      <InfoGrid />
    </Section>

    <CurrentProject />

    <Footer />
  </Layout>
);

export default IndexPage;
