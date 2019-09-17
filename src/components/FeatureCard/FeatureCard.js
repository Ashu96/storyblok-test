import React from 'react'
import PropTypes from 'prop-types'
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
  // const shortContent = body.length < 100

  return (
    <FeatureCardWrapper shortContent={shortContent}>
      {title && <Heading3 className="title">{title}</Heading3>}
      <div className="image-container">
        {media && <img loading="lazy" src={media} alt={title} />}
        {/* {media && <Img fluid={media} alt={title} />} */}
      </div>
      <BodyText>{body}</BodyText>
    </FeatureCardWrapper>
  )
}

export default FeatureCard

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired
}
FeatureCard.defaultTypes = {
  title: PropTypes.string.isRequired
}
