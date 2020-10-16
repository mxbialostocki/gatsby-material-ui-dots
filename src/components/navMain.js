import React from "react"

import { graphql, useStaticQuery } from 'gatsby'

import { Grid, Typography, Hidden } from "@material-ui/core"

import Link from './link'

import { useStyles, createSlug } from '../utils'

const NavMain = ({ setAnchorEl, navItems }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { headerWrap, navItem, navDropdown } = useStyles()
  const openNavDropdown = event => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <Grid container direction="row" className={headerWrap}>
      <Grid item xs={2} className={navDropdown}>
        <Typography variant="h3" role="menu" onClick={event => openNavDropdown(event)} />
      </Grid>
      <Grid item xs={10} md={4}>
        <Typography variant="h3">
          <Link
            to="/"
            className={navItem}
          >
            {data.site.siteMetadata.title}
          </Link>
        </Typography>
      </Grid>
      <Hidden smDown>
        <Grid container item direction="row" justify="space-evenly" alignContent="center" alignItems="center" xs={2} md={8}>
          {navItems.filter(item => item !== 'home').map(item => (
            <Grid
              key={item}
              item
              md={3}
            >
              <Typography variant='h6' align='center'>
                <Link
                  to={`/${createSlug(item)}`}
                  className={navItem}
                  activeStyle={{ color: '#f44336' }}
                >
                  {item}
                </Link>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default NavMain
