import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Img from 'gatsby-image'
import { getFixedGatsbyImage } from 'gatsby-storyblok-image'
import { backgrounds } from '../../constants/colors'
import { Heading3, BodyText } from '../../styles/text'
import { getDimensions, useContainerWidth } from '../../utils'

const StaffMemberCardWrapper = Styled.div`
  min-width: ${props => (props.hasTitle ? 'inherit' : '320px')};
  max-width: ${props => (props.hasTitle ? '320px' : '350px')};
  border-radius: 10px;
  box-shadow: ${props =>
    props.bgPrimary ? 'none' : '0 4px 10px 0 rgba(219, 221, 227, 0.5)'};
  background-color: ${props =>
    props.bgPrimary ? backgrounds.fadedPurple : backgrounds.white};

  padding: 35px;
  text-align: ${props => props.alignHorizontal};

  margin: auto;
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  & .name {
    margin-bottom: 8px;
    width: 100%;
  }

  & .title {
    min-height: ${props => (props.largeMedia ? '0px' : '84px')};
  }

  @media (min-width: 999px) and (max-width: 1200px) {
    width: 300px;
    padding: 40px;
    min-height: 470px;
  }
`

function StaffMemberCard({ blok }) {
  const { name, title, media, bgPrimary, alignHorizontal, largeMedia } = blok

  // const containerWidth = useContainerWidth('.media')

  const [width, height] = getDimensions(media)
  // const aspectRatio = width / height

  const fixedProps = getFixedGatsbyImage(media, {
    width,
    height,
    toFormat: 'webp'
  })

  return (
    <StaffMemberCardWrapper
      largeMedia={largeMedia}
      bgPrimary={bgPrimary}
      alignHorizontal={alignHorizontal}
      hasTitle={title}
    >
      <div className="media" style={{ width: '100%', marginBottom: 30 }}>
        {fixedProps && <Img fixed={fixedProps} alt={title} />}
      </div>
      <Heading3 className="name">{name}</Heading3>
      {title && <BodyText className="title">{title}</BodyText>}
    </StaffMemberCardWrapper>
  )
}

export default StaffMemberCard

StaffMemberCard.propTypes = {
  title: PropTypes.string.isRequired
}
StaffMemberCard.defaultTypes = {
  title: PropTypes.string.isRequired
}
