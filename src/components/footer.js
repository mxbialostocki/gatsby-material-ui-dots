import React from "react"
import { Grid, Typography } from "@material-ui/core"

import Link from './link'

import { useStyles } from '../utils'

const Footer = () => {
  const { footer, footerWrap, primary } = useStyles()

  return (
    <footer className={footer}>
      <Grid container direction='row' justify='flex-start' alignItems='flex-end' alignContent='flex-start' spacing={1} className={footerWrap}>
        
        <Grid item xs={12}>
          <Typography variant='body2'>
            © {new Date().getFullYear()}, Built by{` `}<Link to='/'><span className={primary}>mxbialostocki</span></Link> with{` `}<Link to="https://www.gatsbyjs.org">Gatsby</Link>
          </Typography>          
        </Grid>

      </Grid>
    </footer>
  )
}

export default Footer
