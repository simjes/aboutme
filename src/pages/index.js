import React from "react";
import AboutMe from "../components/aboutMe";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Section from "../components/section";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Section title="About me">
      <AboutMe />
    </Section>

    <Section title="Experience">ew</Section>

    <Section title="Education">ewe</Section>
  </Layout>
);

export default IndexPage;
