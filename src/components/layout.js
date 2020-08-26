import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grid } from '@material-ui/core'

import Header from "./header"

import useStyles from '../../plugins/custom-mui-theme/theme/custom'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { layout } = useStyles()

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Grid container spacing={4} className={layout}>
        <Grid item xs={12}>
          <main>{children}</main>
        </Grid>
        <Grid item xs={12}>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
