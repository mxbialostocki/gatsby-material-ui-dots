import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"

import theme from "./theme"

export const wrapRootElement = ({ element }) => {
  // de-un-comment the following line to spit the theme into the console when building
  // console.info(`theme`, theme)
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}