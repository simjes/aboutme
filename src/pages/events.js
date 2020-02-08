import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { lazerTitle } from '../theme';

// TODO: Refactor out to shared queries
const EVENTS_QUERY = graphql`
  query {
    fauna {
      allEvents {
        data {
          _id
          endDate
          name
          startDate
          posts {
            data {
              name
            }
          }
        }
      }
    }
  }
`;

const Events = () => {
  const { fauna } = useStaticQuery(EVENTS_QUERY);
  const events = fauna.allEvents.data
    .filter(event => event.posts.data.length > 0)
    .sort((a, b) => b.startDate.localeCompare(a.startDate));

  return (
    <Layout seoTitle="Events">
      <Root>
        <H1>Events</H1>
        <Ingress>Sometimes I post pictures of events I&apos;ve been to</Ingress>
        {events.map(event => {
          const year = new Date(event.startDate).getFullYear();

          return (
            <Link to={`/${event.name.toLowerCase()}-${year}`}>
              {event.name} - {year}
            </Link>
          );
        })}
      </Root>
    </Layout>
  );
};

export default Events;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Ingress = styled.p`
  font-size: 0.8rem;
  max-width: 500px;
`;

const H1 = styled.h1`
  ${lazerTitle}
`;
