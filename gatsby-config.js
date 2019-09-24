module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'jeAO37JrRyzLfXaUXn16mgtt',
        homeSlug: 'home',
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Uprise.co`,
        short_name: `Uprise`,
        description: `Uprise is a proactive and science-based Employee Assistance Program (EAP) provider in Australia.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#7d60ff`,
        display: `standalone`,
        icon: 'src/images/logo.webp'
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about-us/`, `/projects/*`]
      }
    }
  ]
}
