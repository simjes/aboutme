import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import Backdrop from './backdrop';
import Jumbotron from './jumbotron';
import ScrollToContent from './scrollToContent';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <header>
        <Backdrop />
        <Jumbotron />

        <ScrollToContent />
      </header>

      {children}
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
