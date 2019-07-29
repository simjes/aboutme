import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Tags from '../components/tags';

const TOOLS_QUERY = graphql`
  query {
    prisma {
      tools {
        name
      }
    }
  }
`;

const Toolbox = () => {
  const { prisma } = useStaticQuery(TOOLS_QUERY);
  const tags = prisma.tools.map(tool => tool.name);

  return (
    <Layout seoTitle="Toolbox">
      <Root>
        <Tags tags={tags} />
      </Root>
    </Layout>
  );
};

export default Toolbox;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
