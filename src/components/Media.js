import React from 'react'
import Styled from 'styled-components'

const ImageWrapper = Styled.div`
  display: flex;
  justify-content: ${props => props.alignHorizontal};
  padding-bottom: ${props => props.paddingBottom};
  & img {
    width: ${props => (props.large ? '100%' : 'auto')};
    max-height: ${props => (props.large ? '100%' : '270px')};
  }
  margin-bottom: 24px;

  @media (min-width) {
    margin-bottom: 0px;
  }

`

function Media({ blok }) {
  const { image, description, paddingBottom, alignHorizontal, large } = blok
  return (
    <ImageWrapper
      large={large}
      paddingBottom={paddingBottom}
      alignHorizontal={alignHorizontal}
    >
      <img loading="lazy" src={image} alt={description} />
    </ImageWrapper>
  )
}

export default Media
