import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { getFixedGatsbyImage } from 'gatsby-storyblok-image'
import Img from 'gatsby-image'
import { Heading4, Note } from '../../styles/text'
import { extended } from '../../constants/colors'
import { useContainerWidth } from '../../utils'

const MiniStepCardWrapper = Styled.div`
  margin-bottom: 60px;

  & .media {
    margin-bottom: 24px;
  }

  & .label {
    margin-bottom: 8px;
  }

  & .title {

  }

  @media (min-width: 1024px) {
    margin-bottom: 0px;
    & .media {
      margin-bottom: 36px;
    }
  }
`

function MiniStepCard({ media, label, title }) {
  const containerWidth = useContainerWidth('.MiniStepCardWrapper')

  const fixedProps = getFixedGatsbyImage(media, {
    width: containerWidth,
    toFormat: 'webp'
  })

  return (
    <MiniStepCardWrapper className="MiniStepCardWrapper">
      <div className="media">
        {fixedProps && <Img fixed={fixedProps} alt={title} />}
      </div>
      <Note className="label" textCenter color={extended.charcoal.two}>
        {label}
      </Note>
      <Heading4 className="title" bold textCenter>
        {title}
      </Heading4>
    </MiniStepCardWrapper>
  )
}

export default MiniStepCard

MiniStepCard.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired
}
