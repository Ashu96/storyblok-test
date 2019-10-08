import React from 'react'
import { Link } from 'gatsby'
import { isExternal, navigateTo } from '../../utils'

function Anchor({ to, children, activeClassName, ...restProps }) {
  return isExternal(to) ? (
    <a href={to} target="_blank" rel="noopener noreferrer" {...restProps}>
      {children}
    </a>
  ) : (
    <Link to={to} {...restProps} activeClassName={activeClassName}>
      {children}
    </Link>
  )
}

function Redirect({ blok }) {
  const {to} = blok
  React.useEffect(() => {
    navigateTo(to)
  }, [to])
  
  return  null
}

export { Anchor, Redirect }
