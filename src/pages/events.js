import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

// TODO: denne er lik i gatsby node
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
  const events = fauna.allEvents.data.sort((a, b) =>
    b.startDate.localeCompare(a.startDate),
  );

  return (
    <Layout seoTitle="Toolbox">
      <Root>
        {// TODO: placeholder for events without posts
        events.map(event => (
          <Link
            to={`${event.name.toLowerCase()}-${new Date(
              event.startDate,
            ).getFullYear()}`}
          >
            {event.name}
          </Link>
        ))}
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
