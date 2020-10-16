import React from 'react'
import { Link as GatsbyLink } from "gatsby"

import { useStyles } from '../utils'

// destructure the prop here and pass activeClassName and partiallyActive to GatsbyLink
const Link = ({ children, to, activeClassName, activeStyle, partiallyActive, ...other }) => {
  const { link } = useStyles()
  // This test assumes that any internal link (intended for Gatsby) will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
  
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        activeStyle={{ color: '#f50057' }}
        partiallyActive={partiallyActive}
        className={link}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...other} className={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default Link
