import React, { useState } from 'react'

import { NavMain } from './nav-main'
import { NavDropdown } from './nav-dropdown'
import { useStyles } from '../utils'

const Header = () => {
  const navItems = ['home', 'page1', 'page2', 'contact']
  const { header } = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  return (
    <header className={header}>
      <NavMain setAnchorEl={setAnchorEl} navItems={navItems} />
      <NavDropdown anchorEl={anchorEl} setAnchorEl={setAnchorEl} navItems={navItems} />
    </header>
  )
}

export default Header
