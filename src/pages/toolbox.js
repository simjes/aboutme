import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Tags from '../components/tags';

const TOOLS_QUERY = graphql`
  query {
    fauna {
      allTools {
        data {
          name
        }
      }
    }
  }
`;

const Toolbox = () => {
  const { fauna } = useStaticQuery(TOOLS_QUERY);
  const tags = fauna.allTools.data.map(tool => tool.name);

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
