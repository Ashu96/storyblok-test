import React from 'react'
import FeaturedBlogCard from './FeatureBlogCard'
import CategoryMenu from './CategoryMenu'
import CategorySection from './CategorySection'
import {useBlogCategoryData} from './utils'

function BlogHome() {
  const [
    categories,
    categoryMap,
    featuredBlog
  ] = useBlogCategoryData()

  return (
    <React.Fragment>
      <FeaturedBlogCard {...featuredBlog} />
      <CategoryMenu
        categories={['All categories', ...categories]}
        activeCategory={'All categories'}
      />
      {categories.map((category, idx) => {
        const blogs = categoryMap[category]
        const showAll = blogs.length >= 6
        return (
          <CategorySection
            key={`category-section-${idx}`}
            title={category}
            blogs={blogs.slice(0, 6)}
            showAll={showAll}
          />
        )
      })}
    </React.Fragment>
  )
}

export default BlogHome
