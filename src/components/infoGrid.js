import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { XS } from '../theme';
import Company from './company';

const COMPANIES_QUERY = graphql`
  query {
    fauna {
      allCompanies {
        data {
          _id
          active
          logoFile
          name
          period
          position
          startDate
        }
      }
    }
  }
`;

const InfoGrid = () => {
  const { fauna } = useStaticQuery(COMPANIES_QUERY);

  return (
    <Grid>
      {fauna.allCompanies.data
        .sort((a, b) => b.startDate.localeCompare(a.startDate))
        .map(company => (
          <Company key={company.id} {...company} />
        ))}
    </Grid>
  );
};

export default InfoGrid;

const Grid = styled.div`
  --gridItemMin: 400px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--gridItemMin), 1fr));
  grid-gap: 1rem;

  > * {
    margin-top: 2rem;
  }

  @media (max-width: ${XS}) {
    --gridItemMin: 1fr;

    > * {
      margin-top: 3rem;
    }
  }
`;
