require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Simjes`,
    description: `About me page for simjes`,
    author: `@simjes`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'Fauna',
        fieldName: 'fauna',
        url: process.env.FAUNA_URL,
        headers: {
          Authorization: `Bearer ${process.env.FAUNA_KEY}`,
        },
        refetchInterval: 60,
      },
    },

    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
