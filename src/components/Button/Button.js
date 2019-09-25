import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Icon from '../Icon'
import { getButton, navigateTo } from '../../utils'
import { backgrounds, primary } from '../../constants/colors'

const ButtonWrapper = Styled.div`
  display: flex;
  justify-content: center;
`

function Button({ type, label, link, withIcon }) {
  const Button = getButton(type)

  return (
    <ButtonWrapper>
      <Button onClick={() => navigateTo(link)}>
        {label}
        {withIcon && (
          <Icon
            fill={type === 'PRIMARY' ? backgrounds.white : primary.purple}
          />
        )}
      </Button>
    </ButtonWrapper>
  )
}

export default Button

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  withIcon: PropTypes.bool
}
Button.defaultProps = {
  label: 'button',
  withIcon: false
}
