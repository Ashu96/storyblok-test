import React from 'react'
import Styled from 'styled-components'

const ImageWrapper = Styled.div`
  display: flex;
  justify-content: ${props => props.alignHorizontal};
  padding-bottom: ${props => props.paddingBottom};
  & img {
    max-width: 100%;
    /* max-height: 270px; */
  }

`

function Media({ blok }) {
  const { image, description, paddingBottom, alignHorizontal } = blok
  return (
    <ImageWrapper
      paddingBottom={paddingBottom}
      alignHorizontal={alignHorizontal}
    >
      <img loading="lazy" src={image} alt={description} />
    </ImageWrapper>
  )
}

export default Media
