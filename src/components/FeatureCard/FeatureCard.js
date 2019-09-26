import React from 'react'
// import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { getFixedGatsbyImage } from 'gatsby-storyblok-image'
import Styled from 'styled-components'
import { backgrounds } from '../../constants/colors'
import { Heading3, BodyText } from '../../styles/text'

const FeatureCardWrapper = Styled.div`
  width: auto;
  height: ${props => (props.shortContent ? '490px' : '590px')};
  background-color: ${backgrounds.fadedPurple};
  padding: 40px;
  text-align: center;

  margin-top: 16px;

  & .title {
    margin-bottom: 40px;
  }

  & .image-container {
    margin-bottom: 40px;
    & img {
      height: 171px;
      width: 100%;
    }
  }

  & .heading {
    display: flex;
    flex-direction: column;

    margin-bottom: 64px;
  }

  @media (min-width: 768px) {
    min-width: 300px;
    height: ${props => (props.shortContent ? '447px' : '590px')};
  }

  @media (min-width: 1220px) {
    width: 345px;
    height: ${props => (props.shortContent ? '447px' : '590px')};
  }
`

function FeatureCard({ blok }) {
  const { title, media, body, shortContent } = blok
  const fixedProps = getFixedGatsbyImage(media, {
    width: 250,
    toFormat: 'webp'
  })
  return (
    <FeatureCardWrapper shortContent={shortContent}>
      {title && <Heading3 className="title">{title}</Heading3>}
      <div className="image-container">
        {/* {media && <img loading="lazy" src={media} alt={title} />} */}
        {media && <Img fixed={fixedProps} alt={title} />}
      </div>
      <BodyText>{body}</BodyText>
    </FeatureCardWrapper>
  )
}

export default FeatureCard

// FeatureCard.propTypes = {
//   title: PropTypes.string.isRequired
// }
// FeatureCard.defaultTypes = {
//   title: PropTypes.string.isRequired
// }
