import React from 'react'
import Styled from 'styled-components'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-storyblok-image'
import { getDimensions } from '../utils'

const ImageWrapper = Styled.div`
  display: flex;
  justify-content: ${props => props.alignHorizontal};
  padding-bottom: ${props => props.paddingBottom};

  & .gatsby-image-wrapper {
    width: ${props => (props.large ? '100%' : `${props.width}px`)};
    max-height: ${props => (props.large ? '100%' : '270px')};
  }

  margin-bottom: 24px;

  @media (min-width) {
    margin-bottom: 0px;
  }

`

function Media({ blok }) {
  const { image, description, paddingBottom, alignHorizontal, large } = blok

  const [width] = getDimensions(image)

  const fluidProps = getFluidGatsbyImage(image, {
    maxWidth: 900,
    toFormat: 'webp'
  })

  return (
    <ImageWrapper
      large={large}
      paddingBottom={paddingBottom}
      alignHorizontal={alignHorizontal}
      width={width}
    >
      {fluidProps ? (
        <Img fluid={fluidProps} alt={description} />
      ) : (
        <img loading="lazy" src={image} alt={description} />
      )}
    </ImageWrapper>
  )
}

export default Media
