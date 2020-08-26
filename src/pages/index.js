import React from "react"
import { Link } from "gatsby"
// import Style components directly from material-ui/core here:
import { Typography, Container } from '@material-ui/core'

// import useStyles from the custom-mui-theme custom.js
import useStyles from "../../plugins/custom-mui-theme/theme/custom"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  // you can deconstruct the required styles from custom.js like so, and then apply to an element using className={}
  const { containerExample } = useStyles()
  return (
    <React.Fragment>
      <Layout>
        <SEO title="Home" />
        <Typography variant="h1">Hi people</Typography>
        <Typography variant="body1">Welcome to your new Gatsby site.</Typography>
        <Typography variant="body1">This starter has been modified to incorporate Material-UI and Google Web Fonts</Typography>
        <Container className={containerExample}>
          <Image />
        </Container>
        <Link to="/page-2/">Go to page 2</Link>
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </Layout>
    </React.Fragment>
  )
  
  }

export default IndexPage
