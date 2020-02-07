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
        <h1>Events</h1>
        <Ingress>
          As a fun little experiment I created a mobile app which I will use
          when I travel. The application will remind me every day at a random
          time to take a picture during an event, and it will automatically
          upload the picture and trigger a rebuild of this site.
        </Ingress>
        {// TODO: placeholder for events without posts
        events.map(event => {
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
