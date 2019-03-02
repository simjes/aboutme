import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Company from './company';

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 1rem;

  > * {
    margin-top: 4rem;
  }
`;

const InfoGrid = ({ experience }) => (
  <Grid>
    {experience.map(exp => (
      <Company key={exp.id} {...exp} />
    ))}
  </Grid>
);

InfoGrid.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default InfoGrid;
