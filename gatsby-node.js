const path = require('path')

function getSlugFromTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const entiresPromise = new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve('src/templates/storyblok-entry.js')

    resolve(
      graphql(
        `
          {
            stories: allStoryblokEntry {
              edges {
                node {
                  id
                  name
                  created_at
                  uuid
                  slug
                  field_component
                  full_slug
                  content
                  is_startpage
                  parent_id
                  group_id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const entries = result.data.stories.edges
        const contents = entries.filter(entry => {
          return entry.node.field_component != 'global_navi'
        })
        contents.forEach((entry, index) => {
          let fullSlug = entry.node.full_slug
          if (entry.node.full_slug === 'blog/') {
            fullSlug = 'blog'
          }
          const pagePath = entry.node.full_slug == 'home' ? '' : `${fullSlug}/`

          createPage({
            path: `/${pagePath}`,
            component: storyblokEntry,
            context: {
              story: entry.node
            }
          })
        })
      })
    )
  })

  const getBlogCategoriesPromise = new Promise((resolve, reject) => {
    const BlogCategoryTemplate = path.resolve('src/templates/category.js')

    resolve(
      graphql(
        `
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
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const { allStoryblokEntry } = result.data

        const contents = allStoryblokEntry.edges.map(({ node }) =>
          JSON.parse(node.content)
        )
        const categoryMap = {}

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

        categories.forEach(category => {
          const slug = `/blog/category/${getSlugFromTitle(category)}`
          createPage({
            path: slug,
            component: BlogCategoryTemplate,
            context: {
              category,
              categories,
              blogs: categoryMap[category],
              slug
            }
          })
        })
      })
    )
  })

  return Promise.all([entiresPromise, getBlogCategoriesPromise])
}
