import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import "./layout.css";
import Jumbo from "./jumbo";
import Backdrop from "./backdrop";

const Main = styled.main`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div>
          <header>
            <Backdrop />
            <Jumbo />
          </header>

          <Main>{children}</Main>
          {/* no footer */}
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
