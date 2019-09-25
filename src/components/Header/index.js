import React from 'react'
import Header from './Header'
import { useHeader } from '../../utils'

function HeaderContainer() {
  const header = useHeader()
  const { bgPrimary, navitems } = header
  return (
    <Header
      navItems={navitems}
      bgPrimary={bgPrimary}
    />
  )
}

export default HeaderContainer
