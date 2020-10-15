import React from "react"
import PropTypes from "prop-types"
import { Grid } from '@material-ui/core'

import Header from "./header"
import Footer from "./footer"

import useStyles from '../../plugins/custom-mui-theme/theme/custom'

const Layout = ({ children }) => {
  const { layout } = useStyles()

  return (
    <React.Fragment>
      <Header />
      <Grid container spacing={4} className={layout}>
        <Grid item xs={12}>
          <main>{children}</main>
        </Grid>          
      </Grid>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
