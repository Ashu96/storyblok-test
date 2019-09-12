import React from 'react'
import Styled from 'styled-components'

const ImageWrapper = Styled.div`
  display: flex;
  justify-content: center;

  & img {
    
    max-width: 100%;
    max-height: 270px;
  }

`

function Media({ blok }) {
  const { image, description } = blok
  return (
    <ImageWrapper>
      <img loading='lazy' src={image} alt={description} />
    </ImageWrapper>
  )
}

export default Media
