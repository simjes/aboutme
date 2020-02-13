/* eslint-disable */
const GraphQLClient = require('graphql-request');
const isWithinRange = require('date-fns/is_within_range');

const endpoint = process.env.FAUNA_URL;
const token = process.env.FAUNA_KEY;

exports.handler = async function(event, context) {
  const published = new Date().toISOString();
  const client = new GraphQLClient(endpoint, {
    headers: {
      authroization: `Bearer ${token}`,
    },
  });

  try {
    const allEvents = await client.request(endpoint, allEventsQuery);
    console.log(allEvents);
    const currentEvent = allEvents.find(event =>
      isWithinRange(published, event.startDate, event.endDate),
    );

    if (!currentEvent) {
      throw new Error('There is currently no ongoing event');
    }

    const variables = {
      name: event.context.custom.caption,
      publicImageId: event.public_id,
      published,
      eventId: currentEvent.id,
    };

    const savePost = await client.request(
      endpoint,
      createPostMutation,
      variables,
    );

    console.log(savePost);

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: 'wee' }),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};

// Possible improvment is to have a custom fuana resolver to get the current event
const allEventsQuery = `{
    query allEvents {
      allEvents {
        data {
          _id
          name
          startDate
          endDate
        }
      }
    }
  }`;

const createPostMutation = `
    mutation createPost(
      $name: String!
      $publicImageId: String!
      $published: Time!
      $eventId: ID!
    ) {
      createPost(
        data: {
          name: $name
          publicImageId: $publicImageId
          published: $published
          event: { connect: $eventId }
        }
      ) {
        _id
        name
      }
    }
  `;
