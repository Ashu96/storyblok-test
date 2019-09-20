import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { navigate } from 'gatsby'
import { Row, Col } from '../../styles/grid'
import { RoundButton } from '../../styles/buttons'
import { getSlugFromTitle } from '../../utils'

const CategoryMenuContainer = Styled.div`

  & .content {
    padding-top: 48px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    & button {
      margin-right: 12px;
      margin-bottom: 24px;
    }

    @media (min-width: 768px) {
      padding-bottom: 50px;
      flex-direction: row;
    }
  }
`

function CategoryMenu({ categories, activeCategory }) {
  // const menu = categories.edges.map(({ node }) => ({
  // 	...node,
  // 	isActive: node.strapiId === activeCategory
  // }))
  const menu = categories.map((cat, index) => ({
    id: index,
    slug: getSlugFromTitle(cat),
    title: cat,
    isActive: cat === activeCategory
  }))

  return (
    <CategoryMenuContainer className="row">
      <Col>
        <div className="content">
          {menu.map(category => (
            <RoundButton
              key={category.id}
              isActive={category.isActive}
              onClick={() => navigate(`/blog/category/${category.slug}`)}
            >
              {category.title}
            </RoundButton>
          ))}
        </div>
      </Col>
    </CategoryMenuContainer>
  )
}

export default CategoryMenu

CategoryMenu.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      isActive: PropTypes.bool
    }).isRequired
  )
}
