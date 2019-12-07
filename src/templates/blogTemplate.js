import React from "react";
import { graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import TechIcon from "../components/techIcon";
import { theme } from "../theme";
import { Link } from "gatsby";

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        tags
      }
    }
  }
`;

export default function Template({
  data // this prop will be injected by the GraphQL query
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  // TODO - SEO - react helm
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Post>
          <HomeLink to="/">Home</HomeLink> {/* TODO: icon and animation */}
          <h1>{frontmatter.title}</h1>
          <MetaData>
            <Icons>
              {frontmatter.tags.map(tag => (
                <Icon key={tag} icon={tag} />
              ))}
            </Icons>
            <div>{frontmatter.date}</div>
          </MetaData>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </Post>
      </Root>
    </ThemeProvider>
  );
}

const Root = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10em;
`;

const Post = styled.article`
  max-width: ${props => props.theme.maxWidth};
`;

const Content = styled.div`
  margin-top: 5em;

  h2 {
    margin-bottom: 0.5rem;

    &:not(:first-of-type) {
      margin-top: 2rem;
    }
  }

  blockquote {
    text-align: center;
    border: 2px solid cyan;
    border-radius: 12px;
    padding: 30px;
  }
`;

const MetaData = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled(TechIcon)`
  height: 20px;
  width: 20px;

  &:not(:first-of-type) {
    margin-left: 20px;
  }
`;

const HomeLink = styled(Link)`
  font-family: "lazer84";
`;
