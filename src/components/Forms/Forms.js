import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const FormsWrapper = Styled.div``

function Forms() {
	return (
		<FormsWrapper>
      
		</FormsWrapper>
	)
}

export default Forms

Forms.propTypes = {
	title: PropTypes.string.isRequired
}
Forms.defaultTypes = {
	title: PropTypes.string.isRequired
}