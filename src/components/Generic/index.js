import React from 'react'
import { Link } from 'gatsby'
import { isExternal } from '../../utils'

function Anchor({ to, children, ...restProps }) {
  return isExternal(to) ? (
    <a href={to} target="_blank" rel="noopener noreferrer" {...restProps}>
      {children}
    </a>
  ) : (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  )
}

export {
  Anchor
}