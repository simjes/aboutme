import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "./sectionTitle";
import styled from "styled-components";

const Root = styled.div`
  margin-top: 2rem;
`;

const Section = ({ title, children }) => {
  return (
    <Root>
      <SectionTitle title={title} />
      <div>{children}</div>
    </Root>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
