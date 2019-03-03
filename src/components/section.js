import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import SectionTitle from './sectionTitle';
import { XS } from '../theme';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${props =>
    props.highlight ? props.theme.foregroundColor : '#fff'};
`;

const Content = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  padding: 30px;

  @media (max-width: ${XS}) {
    padding: 10px;
  }
`;

const Section = ({ title, children, highlight }) => {
  return (
    <Root highlight={highlight}>
      <Content>
        <SectionTitle title={title} />

        <div>{children}</div>
      </Content>
    </Root>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  highlight: PropTypes.bool,
};

export default Section;
