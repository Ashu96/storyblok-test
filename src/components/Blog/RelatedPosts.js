import React from 'react'
import PropTypes from 'prop-types'
import CategorySection from './CategorySection'
import {useBlogCategoryData} from './utils'
import { Heading2 } from '../../styles/text'

function RelatedPosts({ category }) {
  const [
    ,
    categoryMap,
    ,
  ] = useBlogCategoryData()

  const blogs =
    categoryMap[category] && categoryMap[category].length > 3
      ? categoryMap[category].slice(0, 3)
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

RelatedPosts.propTypes = {
  category: PropTypes.string.isRequired
}

RelatedPosts.defaultProps = {
  category: 'Mental health tips'
}