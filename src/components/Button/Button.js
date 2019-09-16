import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Icon from '../Icon'
import { getButton } from '../../utils'
import { backgrounds, primary } from '../../constants/colors'

const ButtonWrapper = Styled.div``

function Button({ blok }) {
  const { type, label, withIcon } = blok
  const Button = getButton(type)

	return (
		<ButtonWrapper>
      <Button>
        {label}
        {withIcon && (
              <Icon
                fill={
                  type === 'PRIMARY'
                    ? backgrounds.white
                    : primary.purple
                }
              />
            )}
      </Button>
		</ButtonWrapper>
	)
}

export default Button

Button.propTypes = {
	title: PropTypes.string.isRequired
}
Button.defaultTypes = {
	title: PropTypes.string.isRequired
}