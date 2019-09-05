import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  BodyText,
  Note,
  Label
} from '../../styles/text'
import { primary, extended } from '../../constants/colors'

const HEADINGS = {
  Heading1: Heading1,
  Heading2: Heading2,
  Heading3: Heading3,
  Heading4: Heading4,
  BodyText: BodyText,
  Note: Note,
  Label: Label
}

const getTextComponent = type => HEADINGS[type]

const getColorValue = color => {
  if (color === 'charcoal') {
    return primary.charcoal
  }
  return extended.charcoal[color]
}

const HeadingWrapper = Styled.div``

function Heading({ blok }) {
  console.log({ blok })
  console.log('********************************************')
  
  const { size, color, text, center, bold } = blok
  const Text = getTextComponent(size)
  return (
    <HeadingWrapper>
      <Text color={getColorValue(color)} textCenter={center} bold={bold}>
        {text}
      </Text>
    </HeadingWrapper>
  )
}

export default Heading

Heading.propTypes = {
  title: PropTypes.string.isRequired
}
Heading.defaultTypes = {
  title: PropTypes.string.isRequired
}
