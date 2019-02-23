import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import SectionTitle from './sectionTitle';

const Root = styled.div`
  max-width: ${props => props.theme.maxWidth};
  padding: 30px;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const Section = ({ title, children }) => {
  return (
    <Root>
      <SectionTitle title={title} />
      <hr />
      <Content>{children}</Content>
    </Root>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
