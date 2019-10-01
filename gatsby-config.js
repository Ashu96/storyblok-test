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
    },
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 500
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1I5k42Vi1NRi5xLJw_pqc4Jm0AmQJKyHBfhZZpKlIojE',
        worksheetTitle: 'Sheet1',
        credentials: {
          type: 'service_account',
          project_id: 'indigo-listener-254604',
          private_key_id: 'bd3c0eb87ab7a86fd5299f4971c08a85c3fbb95e',
          private_key:
            '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCsFZPp89Wy5akV\nUlpsWz+GV9SLy0VadHgyykELahfKBsw6jQfgLf4tbIh3070L5wjrA5pHGJb04FyG\nD9E2u9Woa2YEMAf9d96xEXnNnN0Uu5IL4OrI8Y6i4ynPKN2HJbqbiEEhkM63L2zl\nLCaT85UhD6qgbCXxSjlNdR0VaCbyLXL2uy7H7ZvHaFcs/zBjMeyiAvolx3aj73bt\nIHrNLA/e54gCG8rbTE4nSWH0Unia+JZxwkZmIkiskAIUUE3Kcv3BFnJGxotDYHpz\nfFEbrogpsW4wGpjVanLu54gGgEzMHBELTrP/8iDukjzkQ3klicxvg4XsU0wWj2hn\ndkmjRa9BAgMBAAECggEAAi9UE2oi+z537JU5EF+SV3A6msem9M2GNAoiDDklph0q\n6zaEoEyyMbFDTG7u81F0qS/4jcT4z/EwMIwvbT4SWe0K6JRD6jSbImE3BEikzJNO\n+O1TKs/pFk2rP4HwudtFbr2KquiG3N/ebnyWfO34lYjYeyjjXJBjSM3TE6040x3h\n8pOdsmDydP1j6oRyMh/+8WUr6K3tX4DJfDToS3Sni4YSs+BHzjFQjyUzRF7n4msA\nQevXqEKeKKCvO11ct3PwaghrgoJYgU8YBPYknFnveZAG9cIqC1vySD+ZPZEu2o2D\nn6k4l0HuGtdcICaUQoIzxDtZF/6tfN7MJf8p7uGXYQKBgQDkpDG7j8Oj5uPl+V0n\n9LV3AUTbC2ZYdojD6cmmig0UVkpoaMvNpE0qc00p31LxAXtH58acVU+vO5MeJ//D\nvYPoAOXQsuzydS687R71F/7LPbNd2wP4RgoBJzfM2Kfo5pOb4c8xxupNgihvSXwY\nMG65mqjor1mYY0EC15OpDXA/oQKBgQDArOk4dVpoWGWg42Bvr8Gh+UY+TJtYXYUB\n1UCeoyUir5oVPZ3PIdPTlIY7AI2UU0+9G6+XTjPG3s11RrVKlfKO49LSJs0LvDuy\nJMv/cKZ+kt4DK0apyFgka80AIUOzWA0ZlvTjnNSHIJ//4lemTqfKVMGYAh6ixisT\n3/3gZpnLoQKBgCcgTf5p0LHonhFJxf5DaxZNWkodvkrfJfJYvJBKSYi0Z5FMdavg\nNPBRwN+sftYNSdp5OEyicLts93UOpT8K3FrEZI99Pv0SvofIECcjDxAao+oow5ol\n6ipeWrcsUDeT1ai0UK+U+Z1/64l3ysuc5iXO6J7A+xUPzx08ZOFmElJhAoGAL1DH\nHSREhWdf3bi4z/SbWol6pIXviC2/IgoailqKHhB9iEXPYTRvboAEzqx+GDS1Wj1Y\nS5HayTWhwvEQSDa2kDyGYzFAHWemSUMcDai+Wkr61lBkVAFtE9SdTTDeDUbMQMJ/\ndP3oex6Z7B7LY33hWqChwhCTMWn03jadg+PuVMECgYAZXpNH8a31yEN7LjiLvvUv\nL/by8/qRsRt2a1ZjO+OEUJEsWzu/plOgeDR/CywQKDnIWG4BNLbibTPEMcJ7EP3a\nLvePRVWhCLJ2XqdzkAtixo4f00yVuGzNDusCeo+/iAebxdGG0ADtLbxbeiPTTeWP\nGXS8ORPV90h9w0Wxwv4XHw==\n-----END PRIVATE KEY-----\n',
          client_email: 'sercer@indigo-listener-254604.iam.gserviceaccount.com',
          client_id: '104267935825426305893',
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url:
            'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url:
            'https://www.googleapis.com/robot/v1/metadata/x509/sercer%40indigo-listener-254604.iam.gserviceaccount.com'
        }
      }
    }
  ]
}
