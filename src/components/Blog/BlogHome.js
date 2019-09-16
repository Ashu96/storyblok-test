import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import FeaturedBlogCard from './FeatureBlogCard'
import CategoryMenu from './CategoryMenu'
import CategorySection from './CategorySection'

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

  const contents = allStoryblokEntry.edges.map(({ node }) =>
    JSON.parse(node.content)
  )
  const categoryMap = {}
  let featuredBlog

  contents.forEach(content => {
    const { body } = content
    if (Array.isArray(body)) {
      body.forEach(item => {
        const blog =
          item.columns && item.columns.find(el => el.component === 'BLOG_POST')
        if (blog) {
          // Save featured blog
          if(blog.featured) {
            featuredBlog = blog
          }
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

  const categories = Object.keys(categoryMap)
  console.log({ categories, categoryMap, featuredBlog })

  return (
    <React.Fragment>
      <FeaturedBlogCard
        {...featuredBlog}
      />
      <CategoryMenu
        categories={['All categories', ...categories]}
        activeCategory={'All categories'}
      />
      {categories.map((category, idx) => {
        const blogs = categoryMap[category]
        return (
          <CategorySection
            key={`category-section-${idx}`}
            title={category}
            blogs={blogs}
            showAll={false}
          />
        )
      })}
    </React.Fragment>
  )
}

export default BlogHome
