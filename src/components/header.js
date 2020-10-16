import React, { useState } from 'react'

import NavMain from './navMain'
import NavDropdown from './navDropdown'
import { useStyles } from '../utils'

const Header = () => {
  const navItems = ['home', 'page-1', 'page-2', 'contact']
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
