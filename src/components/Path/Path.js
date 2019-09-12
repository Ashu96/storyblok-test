import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const PathWrapper = Styled.div`
  display: none;
  
  position: absolute;
  top: 0;
  left: 49%;
  height: 100%;

  & img {
    height: 100%;
  }

  @media (min-width: 1024px) {
    display: block;
  }
`

function Path({ blok }) {
  // type === 'TIME_LINE'
  const { media } = blok
  return (
    <PathWrapper>
      <img loading='lazy' src={media} alt="" />
    </PathWrapper>
  )
}

export default Path

Path.propTypes = {
  title: PropTypes.string.isRequired
}
Path.defaultTypes = {
  title: PropTypes.string.isRequired
}
