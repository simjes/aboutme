import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { XS } from '../theme';
import SectionTitle from './sectionTitle';

const Section = ({ className, title, children, highlight }) => (
  <Root highlight={highlight} className={className}>
    <Content>
      <SectionTitle title={title} />

      <div>{children}</div>
    </Content>
  </Root>
);

Section.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  highlight: PropTypes.bool,
};

Section.defaultProps = {
  className: '',
  highlight: false,
};

export default Section;

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${props =>
    props.highlight
      ? props.theme.foregroundColor
      : props.theme.backgroundColor};
`;

const Content = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  padding: 50px;

  @media (max-width: ${XS}) {
    padding: 30px 10px;
  }
`;
