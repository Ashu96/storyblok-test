import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import CategorySection from './CategorySection'
import { Heading2 } from '../../styles/text'

function RelatedPosts({ blok }) {
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

  const contents = allStoryblokEntry.edges.map(({ node }) =>
    JSON.parse(node.content)
  )
  const categoryMap = {}

  contents.forEach(content => {
    const { body } = content
    if (Array.isArray(body)) {
      body.forEach(item => {
        const blog =
          item.columns && item.columns.find(el => el.component === 'BLOG_POST')
        if (blog) {
          // Arrange blogs in categories
          blog.category.forEach(cat => {
            if (categoryMap[cat]) {
              // Add to list
              categoryMap[cat] = [...categoryMap[cat], blog]
            } else {
              // Create list
              categoryMap[cat] = [blog]
            }
          })
        }
      })
    }
  })

  const category = blok.category || 'Mental health tips'
  const blogs =
    categoryMap[category] && categoryMap[category].length > 3
      ? categoryMap[category].slice(3)
      : categoryMap[category]

  return (
    <CategorySection
      Heading={Heading2}
      title="Related posts"
      blogs={blogs}
      showAll={false}
    />
  )
}

export default RelatedPosts
