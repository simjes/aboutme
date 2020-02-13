/* eslint-disable */
const fetch = require('node-fetch');
const GraphQLClient = require('graphql-request').GraphQLClient;
const isWithinInterval = require('date-fns/isWithinInterval');

const endpoint = process.env.FAUNA_URL;
const token = process.env.FAUNA_KEY;
const buildTrigger = process.env.BUILD_HOOK_URL;

exports.handler = async function(event, context) {
  const content = JSON.parse(event.body);
  const published = new Date().toISOString();
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  try {
    const allEventsResponse = await client.request(allEventsQuery);
    if (allEventsResponse.error) {
      throw new Error('Could not get events');
    }

    const currentEvent = allEventsResponse.allEvents.data.find(event =>
      isWithinInterval(Date.parse(published), {
        start: Date.parse(event.startDate),
        end: Date.parse(event.endDate),
      }),
    );
    if (!currentEvent) {
      throw new Error('There is currently no ongoing event');
    }

    const variables = {
      name: content.context.custom.caption,
      publicImageId: content.public_id,
      published,
      eventId: currentEvent._id,
    };

    const savePostResponse = await client.request(
      createPostMutation,
      variables,
    );
    if (savePostResponse.error) {
      console.log(
        `Unable to add a post to event with id: ${variables.eventId}`,
      );
      throw new Error('Could not save the post');
    }

    const triggerBuild = await fetch(buildTrigger, { method: 'POST' });
    if (!triggerBuild.error) {
      console.log('Unable to trigger build');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: savePostResponse.createPost }),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};

// Possible improvement is to have a custom fuana resolver to get the current event
const allEventsQuery = `
  query {
    allEvents {
      data {
        _id
        name
        startDate
        endDate
      }
    }
  }
`;

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
