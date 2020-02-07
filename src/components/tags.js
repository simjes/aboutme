import { arrayOf, string } from 'prop-types';
import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import Tag from './tag';

const Tags = ({ tags }) => (
  <Root>
    {tags.map(tag => (
      <Tag key={shortid.generate()} tag={tag} />
    ))}
  </Root>
);

Tags.propTypes = {
  tags: arrayOf(string).isRequired,
};

export default Tags;

const Root = styled.ul`
  margin: 0;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 400px;
`;
