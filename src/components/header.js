import PropTypes from "prop-types"
import React from "react"
import { Grid, Typography } from "@material-ui/core"

import Link from './link'

import useStyles from '../../plugins/custom-mui-theme/theme/custom'

const Header = ({ siteTitle }) => {
  const { header, headerWrap } = useStyles()
  return (
    <header className={header} >
      <Grid container spacing={4} direction="row" justify='space-around' alignItems='center' className={headerWrap}>

        <Grid item xs={12} sm={6}>        
          <Link to="/" >
            <Typography variant="h2">{siteTitle}</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link to="/page-2/" >
            <Typography variant="h5">page two</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link to="/" >
            <Typography variant="h5">page three</Typography>
          </Link>
        </Grid>

      </Grid>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
