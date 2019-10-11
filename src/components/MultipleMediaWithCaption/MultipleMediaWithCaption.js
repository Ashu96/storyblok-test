import React from 'react'
// import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Styled from 'styled-components'
import { getFixedGatsbyImage } from 'gatsby-storyblok-image'
import { Heading2 } from '../../styles/text'
import { getDimensions } from '../../utils'

const MultipleMediaWithCaptionWrapper = Styled.div`
  flex-direction: column;
	
	& h2 {
    text-align: center;
  }

  & button {
    margin-right: 16px;

  }
`

function MultipleMediaWithCaption({ blok }) {
  const { title, images } = blok
  return (
    <MultipleMediaWithCaptionWrapper>
      <Heading2>{title}</Heading2>
      <List images={images} />
    </MultipleMediaWithCaptionWrapper>
  )
}

export default MultipleMediaWithCaption

// MultipleMediaWithCaption.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	images: PropTypes.array.isRequired,
// }

// MultipleMediaWithCaption.defaultProps = {
// 	images: []
// }

const ListContainer = Styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0px;
  & li {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const ListItem = Styled.li`
  margin-left: 33px;
  margin-top: 40px;
  min-width: 137px;
`

function List({ images }) {
  return (
    <ListContainer>
      {images.map((image, index) => {
        const [width] = getDimensions(image.filename)
        const fixedProps = getFixedGatsbyImage(image.filename, {
          width
        })

        return (
          <ListItem key={image.name + index}>
            <Img fixed={fixedProps} alt={image.name} />
          </ListItem>
        )
      })}
    </ListContainer>
  )
}
