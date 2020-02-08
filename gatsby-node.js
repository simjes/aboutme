/* eslint-disable */
// TODO: Remove lint disable

const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const eventTemplate = path.resolve(`src/templates/posts.js`);
  const { data, errors } = await graphql(`
    {
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
  `);

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query. ${errors}`);
    return;
  }

  const events = data.fauna.allEvents.data.sort((a, b) =>
    b.startDate.localeCompare(a.startDate),
  );

  events.forEach(event => {
    if (event.posts.data.length > 0) {
      createPage({
        // todo: make util
        path: `${event.name.toLowerCase()}-${new Date(
          event.startDate,
        ).getFullYear()}`,
        component: eventTemplate,
        context: {
          id: event._id,
        },
      });
    }
  });
};
