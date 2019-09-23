import React from 'react'
// import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function Seo({ blok }) {
  const { lang = 'en', keywords = [], meta = {} } = blok
  const {
    description = 'Uprise is a proactive and science-based Employee Assistance Program (EAP) provider in Australia.',
    og_description = 'Uprise is a proactive and science-based Employee Assistance Program (EAP) provider in Australia.',
    og_image = '//a.storyblok.com/f/65490/600x170/de9faa5018/upriselogo.jpg',
    og_title = 'Uprise Employee Assistance',
    title = 'Uprise Employee Assistance',
    twitter_description = 'Uprise is a proactive and science-based Employee Assistance Program (EAP) provider in Australia.',
    twitter_image = '//a.storyblok.com/f/65490/600x170/de9faa5018/upriselogo.jpg',
    twitter_title = 'Uprise Employee Assistance'
  } = meta
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      meta={
        [
          {
            name: `description`,
            content: description
          },
          {
            property: `og:title`,
            content: og_title
          },
          {
            property: `og:description`,
            content: og_description
          },
          {
            property: `og:image`,
            content: og_image
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
            name: `twitter:image`,
            content: twitter_image
          },
          {
            name: `twitter:title`,
            content: twitter_title
          },
          {
            name: `twitter:description`,
            content: twitter_description
          }
        ].concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        // .concat(meta)
      }
    />
  )
}

export default Seo

// Seo.propTypes = {
//   title: PropTypes.string.isRequired
// }
// Seo.defaultTypes = {
//   title: PropTypes.string.isRequired
// }
