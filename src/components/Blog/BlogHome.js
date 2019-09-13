import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

function BlogHome() {
  const data = useStaticQuery(graphql`
    {
      allStoryblokEntry(
        filter: { full_slug: { regex: "/blog/" } }
        sort: { fields: published_at, order: DESC }
      ) {
        edges {
          node {
            id
            name
            full_slug
            content
            published_at(fromNow: true)
          }
        }
      }
    }
  `)

  const { allStoryblokEntry } = data
  console.log({ allStoryblokEntry })

  const contents = allStoryblokEntry.edges.map(({ node }) =>
    JSON.parse(node.content)
  )
  console.log({ contents })

  const blogs = []
  contents.forEach(content => {
    const { body } = content
    content.body.forEach(item => {
      const blog = item.columns && item.columns.find(el => el.component === 'BLOG_POST')
      if (blog) {
        blogs.push(blog)
      }
    })
  })
  console.log({ blogs })

  return <h1>Blog Home</h1>
}

export default BlogHome
