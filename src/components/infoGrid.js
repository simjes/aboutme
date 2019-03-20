import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { XS } from '../theme';
import Company from './company';

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

const companiesQuery = graphql`
  query {
    prisma {
      companies(orderBy: startDate_DESC) {
        id
        name
        logoFile
        name
        position
        period
        active
      }
    }
  }
`;

const InfoGrid = () => {
  const { prisma } = useStaticQuery(companiesQuery);

  return (
    <Grid>
      {prisma.companies.map(company => (
        <Company key={company.id} {...company} />
      ))}
    </Grid>
  );
};

export default InfoGrid;
