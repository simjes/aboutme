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

    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: "#ededf0"
      }}
    >
      <Section title="Experience">ew</Section>
    </div>

    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: "#ededf0"
      }}
    >
      <Section title="Education">ewe</Section>
    </div>
  </Layout>
);

export default IndexPage;
