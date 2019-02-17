import PropTypes from "prop-types";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import Backdrop from "./backdrop";
import Jumbo from "./jumbo";
import "./layout.css";

const Main = styled.main`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <header>
        <Backdrop />
        <Jumbo />
      </header>

      <Main>{children}</Main>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
