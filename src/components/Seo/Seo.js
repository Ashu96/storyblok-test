import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function Seo({ blok }) {
  const { title, description, lang = 'en', keywords = [], meta= '' } = blok
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      // titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: 'twitter author'
        },
        {
          name: `twitter:title`,
          content: 'twitter title'
        },
        {
          name: `twitter:description`,
          content: 'twitter description'
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
    />
  )
}

export default Seo

Seo.propTypes = {
  title: PropTypes.string.isRequired
}
Seo.defaultTypes = {
  title: PropTypes.string.isRequired
}
