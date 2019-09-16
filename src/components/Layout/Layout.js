import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Footer from '../footer'

const LayoutWrapper = Styled.div``

function Layout() {
	return (
		<LayoutWrapper>
      <Footer />
		</LayoutWrapper>
	)
}

export default Layout

Layout.propTypes = {
	title: PropTypes.string.isRequired
}
Layout.defaultTypes = {
	title: PropTypes.string.isRequired
}