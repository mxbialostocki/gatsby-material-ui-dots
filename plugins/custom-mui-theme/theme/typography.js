const typography = {
  // a verbose typography override can prevent user agent stylesheet overrides and similar rendering issues the same way I'd normally use a CSS reset in a static site. It also creates a readable space to debug typography themeing.
  color: "rgba(0, 0, 0, 0.87)",
  fontFamily: "\"Roboto Mono\", \"Helvetica\", \"Arial\", sans-serif",
  // this example uses Jim Nightshade as a sample h1 typography modifier - see gatsby-config.js for gatsby-plugin-webfonts
  h1: {
    fontFamily: "\"Jim Nightshade\"",
    padding: '2rem 0'
  },
  h2: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    marginBottom: 0,
    color: 'inherit',
    fontFamily: "'Roboto Mono', monospace, Roboto, sans-serif",
    fontWeight: 'bold',
    textRendering: 'optimizeLegibility',
    fontSize: '1.62671rem',
    lineHeight: 1.1
  },
  h3: {
    fontFamily: 'Fredericka the Great',
    textAlign: 'right',
    marginLeft: 0,
    marginRight: '1rem',
    marginTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    marginBottom: '1.45rem',
    color: 'inherit',
    fontWeight: 400,
    textRendering: 'optimizeLegibility',
    fontSize: '3rem',
    lineHeight: 1.1
  },
  h4: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    marginBottom: '1.45rem',
    color: 'inherit',
    fontFamily: "'Roboto Mono', monospace, Roboto, sans-serif",
    fontWeight: 'bold',
    textRendering: 'optimizeLegibility',
    fontSize: '1rem',
    lineHeight: 1.1
  },
  h5: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    marginBottom: 0,
    color: 'inherit',
    fontFamily: "'Roboto Mono', monospace, Roboto, sans-serif",
    fontWeight: 'bold',
    textRendering: 'optimizeLegibility',
    fontSize: '0.85028rem',
    lineHeight: 1.1
  },
  h6: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: '1.45rem',
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    color: 'inherit',
    fontFamily: "'Roboto Mono', monospace, Roboto, sans-serif",
    fontWeight: 500,
    textRendering: 'optimizeLegibility',
    fontSize: '1.25rem',
    lineHeight: 1.6
  },
  body1: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: '1.45rem',
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    color: 'inherit',
    fontFamily: "'Roboto Mono', monospace, Roboto, sans-serif",
    fontWeight: 500,
    textRendering: 'optimizeLegibility',
    fontSize: '1rem',
    lineHeight: 1.6
  }
}

export default typography
