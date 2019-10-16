import React from 'react'
// import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Icon from '../Icon'
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

const BASE_SPACING = 16
const getTextComponent = type => HEADINGS[type]

const getColorValue = color => {
  if (color === 'charcoal') {
    return primary.charcoal
  }
  return extended.charcoal[color]
}

const HeadingWrapper = Styled.div`
  margin-bottom: ${props => `${BASE_SPACING * props.marginBottom}px`};
  display: flex;
  align-items: baseline;
  justify-content: ${props => props.alignHorizontal};

  & .icon {
    margin-right: 16px;
  }

  @media (min-width: 1024px) {
    padding: ${props => `0px ${props.paddingHorizontal}%`};
  }

`

function Heading({ blok }) {
  const {
    size,
    color,
    text,
    center,
    bold,
    marginBottom,
    withPoint,
    icon,
    alignHorizontal,
    paddingHorizontal
  } = blok
  const Text = getTextComponent(size)
  console.log({ paddingHorizontal })
  return (
    <HeadingWrapper
      marginBottom={marginBottom}
      showPoint={withPoint}
      alignHorizontal={alignHorizontal}
      paddingHorizontal={paddingHorizontal}
    >
      {withPoint && <Icon name={icon} className='icon'/>}
      <Text
        className="text"
        color={getColorValue(color)}
        textCenter={center}
        bold={bold}
      >
        {text}
      </Text>
    </HeadingWrapper>
  )
}

export default Heading

// Heading.propTypes = {
//   title: PropTypes.string.isRequired
// }
// Heading.defaultTypes = {
//   title: PropTypes.string.isRequired
// }
