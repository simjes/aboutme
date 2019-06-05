import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const Playground = props => (
  <Layout seoTitle="Playground">
    <Root>Comming soon</Root>
  </Layout>
);

Playground.propTypes = {};

export default Playground;

const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
