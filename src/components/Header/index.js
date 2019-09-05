import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

function HeaderContainer({ blok }) {
  console.log('********************************************')
  console.log(`Header`)
  console.log({ blok })
  const { bgPrimary, navitems } = blok
  return (
    <Header
      navItems={navitems}
      bgPrimary={bgPrimary}
      // siteTitle={siteTitle}
      // allNavItems={allNavItems}
    />
  )
}

HeaderContainer.propTypes = {
  bgPrimary: PropTypes.bool
  // id: PropTypes.string.isRequired
}

HeaderContainer.defaultProps = {
  bgPrimary: false
}

export default HeaderContainer
