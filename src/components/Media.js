import React from 'react'
import Styled from 'styled-components'
import Img from 'gatsby-image'
import {
  getFluidGatsbyImage,
  getFixedGatsbyImage
} from 'gatsby-storyblok-image'
import { getDimensions } from '../utils'

const ImageWrapper = Styled.div`
  display: flex;
  justify-content: ${props => props.alignHorizontal};
  padding-bottom: ${props => props.paddingBottom};

  & .gatsby-image-wrapper {
    width: ${props =>
      !props.fixedSize ? (props.large ? '100%' : `${props.width}px`) : 'auto'};
    max-height: ${props =>
      !props.fixedSize ? (props.large ? '100%' : '270px') : '100%'};
  }

  margin-bottom: 24px;

  @media (min-width) {
    margin-bottom: 0px;
  }

`

function Media({ blok }) {
  const {
    image,
    description,
    paddingBottom,
    alignHorizontal,
    large,
    fixedSize
  } = blok

  const [width, height] = getDimensions(image)

  const fluidProps = getFluidGatsbyImage(image, {
    maxWidth: 900,
    toFormat: 'webp'
  })

  const fixedProps = getFixedGatsbyImage(image, {
    width,
    height,
    toFormat: 'webp'
  })

  return (
    <ImageWrapper
      large={large}
      paddingBottom={paddingBottom}
      alignHorizontal={alignHorizontal}
      width={width}
      fixedSize={fixedSize}
    >
      {fixedSize ? (
        <Img fixed={fixedProps} alt={description} />
      ) : fluidProps ? (
        <Img fluid={fluidProps} alt={description} />
      ) : (
        <img loading="lazy" src={image} alt={description} />
      )}
    </ImageWrapper>
  )
}

export default Media
