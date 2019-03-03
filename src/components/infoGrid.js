import { graphql, useStaticQuery } from 'gatsby';
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
