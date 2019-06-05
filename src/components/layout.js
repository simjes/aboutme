import { node, string } from 'prop-types';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import Footer from './footer';
import SEO from './seo';

const Layout = ({ children, seoTitle }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title={seoTitle} keywords={[`aboutme`, `simjes`, `react`]} />
      <Header>Header</Header>
      <Main>{children}</Main>
      <Footer />
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: node.isRequired,
  seoTitle: string.isRequired,
};

export default Layout;

const Header = styled.header`
  background: hotpink;
`;

const Main = styled.main`
  flex: 1 0 auto;
`;
