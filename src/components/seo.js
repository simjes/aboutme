import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

const DETAILS_QUERY = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const SEO = ({ description, lang, meta, keywords, title }) => (
  <StaticQuery
    query={DETAILS_QUERY}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description;
      return (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
          ]
            .concat(
              keywords.length > 0
                ? {
                    name: `keywords`,
                    content: keywords.join(`, `),
                  }
                : [],
            )
            .concat(meta)}
        />
      );
    }}
  />
);

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      property: PropTypes.string,
      content: PropTypes.sring,
    }),
  ),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
