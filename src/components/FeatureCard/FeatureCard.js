import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { getFixedGatsbyImage } from 'gatsby-storyblok-image'
import Styled from 'styled-components'
import { backgrounds } from '../../constants/colors'
import { Heading3, BodyText } from '../../styles/text'

const FeatureCardWrapper = Styled.div`
  width: auto;
  min-height: ${props => (props.shortContent ? '490px' : '590px')};
  background-color: ${backgrounds.fadedPurple};
  padding: 40px;
  text-align: center;
  border-radius: 10px;
  margin-top: 16px;

  & .title {
    margin-bottom: 40px;
    min-height: 60px;
  }

  & .image-container {
    margin-bottom: 40px;
  }

  & .heading {
    display: flex;
    flex-direction: column;

    margin-bottom: 64px;
  }

  & .body {
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: ${props => props.textAlign};
  }

  @media (min-width: 768px) {
    min-width: 300px;
    min-height: ${props => (props.shortContent ? '447px' : '590px')};
  }

  @media (min-width: 1220px) {
    width: 345px;
    min-height: ${props => (props.shortContent ? '447px' : '590px')};
  }
`

function FeatureCard({ title, media, body, shortContent, textAlign }) {
  const fixedProps = getFixedGatsbyImage(media, {
    width: 250,
    toFormat: 'webp'
  })

  return (
    <FeatureCardWrapper shortContent={shortContent} textAlign={textAlign}>
      {title && <Heading3 className="title">{title}</Heading3>}
      <div className="image-container">
        {media && (
          <Img
            fixed={fixedProps}
            alt={title}
            imgStyle={{ objectFit: 'contain' }}
            objectFit="cover"
            objectPosition="50% 50%"
          />
        )}
      </div>
      <BodyText className="body">{body}</BodyText>
    </FeatureCardWrapper>
  )
}

export default FeatureCard

FeatureCard.propTypes = {
  title: PropTypes.string,
  media: PropTypes.string,
  body: PropTypes.string.isRequired,
  shortContent: PropTypes.bool
}
FeatureCard.defaultTypes = {
  shortContent: false
}
