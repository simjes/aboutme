import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
