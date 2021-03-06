import React from 'react'
import { Link } from 'gatsby'
import { Menu, MenuItem, Typography } from '@material-ui/core'
import { useStyles, createSlug } from '../utils'

const NavDropdown = ({ anchorEl, setAnchorEl, navItems }) => {
  const { navItem } = useStyles()
  const closeMenu = () => {
    setAnchorEl(null)
  }

  return (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={closeMenu}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
    >
      {navItems.map(item => (
        <MenuItem
          key={item}
          onClick={closeMenu}
        >
          <Typography variant='h6'>
            <Link
              to={`/${createSlug(item)}`}
              className={navItem}
              activeStyle={{ color: '#f44336' }}
            >
              {item}
            </Link>
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  )
}

export default NavDropdown