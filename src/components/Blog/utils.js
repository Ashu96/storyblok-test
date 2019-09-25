import { useStaticQuery, graphql } from 'gatsby'

export function useBlogCategoryData() {
  const data = useStaticQuery(graphql`
    {
      allStoryBlokEntry: allStoryblokEntry(
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
  const { allStoryBlokEntry } = data

  const contents = allStoryBlokEntry.edges.map(({ node }) =>
    JSON.parse(node.content)
  )

  const categoryMap = {}
  let featuredBlog

  contents.forEach(content => {
    const { body } = content
    if (Array.isArray(body)) {
      const blog = body.find(item => item.component === 'BLOG_POST')
      if (blog) {
        // Save featured blog
        if (blog.featured) {
          featuredBlog = blog
        }
        // Arrange blogs in categories
        blog.category &&
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
    }
  })

  const categories = Object.keys(categoryMap)
  return [
    categories,
    categoryMap,
    featuredBlog
  ]
}
