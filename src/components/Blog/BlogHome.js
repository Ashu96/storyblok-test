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
