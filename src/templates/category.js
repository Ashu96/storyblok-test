import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../components/Header'
import CategoryMenu from '../components/Blog/CategoryMenu'
import CategorySection from '../components/Blog/CategorySection'
import { backgrounds } from '../constants/colors'
import { SectionWrapper } from '../styles/grid'
import { getSlugFromTitle } from '../utils'

function BlogCategory({ navigate, pageContext, path }) {
  const data = useStaticQuery(graphql`
    {
      allStoryBlokEntry: allStoryblokEntry(filter: { is_startpage: { eq: true } }) {
        edges {
          node {
            id
            name
            full_slug
            published_at(fromNow: true)
            slug
            field_component
            content
          }
        }
      }
    }
  `)
  // Get header
  const {allStoryBlokEntry} = data
  const {node} = allStoryBlokEntry.edges.find(({ node }) => node.field_component === 'page')
  const content = JSON.parse(node.content)
  const header = content.body.find(item => item.component === 'header')
  
  // Blog category data
  const { category, blogs, categories } = pageContext
  
  const activeCategory = categories.find(category =>
    path.includes(getSlugFromTitle(category))
  )
  return (
    <React.Fragment>
      <Header  blok={header}/>
      <SectionWrapper
        containerProps={{
          style: {
            paddingTop: 60
          }
        }}
        containerFluidProps={{
          style: {
            backgroundColor: backgrounds.fadedPurple
          }
        }}
      >
        <CategoryMenu categories={categories} activeCategory={activeCategory} />
      </SectionWrapper>
      <CategorySection title={category} blogs={blogs} showAll={false} />
    </React.Fragment>
  )
}

export default BlogCategory
