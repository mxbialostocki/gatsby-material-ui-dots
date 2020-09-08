import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  primary: {
    color: `#f44336`
  },
  containerExample: {
    maxWidth: `300px`,
    marginBottom: `1.45rem`,
    padding: `2rem`
  },
  header: {
    background: `#00041a`,
    position: 'fixed',
    top: '0',
    zIndex: '10',
    width: '100vw',
    height: '6rem'
  },
  headerWrap: {
    margin: `0 auto`,
    padding: `0 1rem`,
    maxWidth: '70vw',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90vw',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100vw'
    }
  },
  link: {
    textDecoration: 'none',
    color: `#f44336`
  },
  layout: {
    margin: `0 auto`,
    maxWidth: '70vw',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90vw',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100vw'
    },
    minHeight: '100vh',
    padding: `6rem 1.0875rem 6rem 1.0875rem`,
    [theme.breakpoints.down('sm')]: {
      padding: `9rem 1.0875rem 9rem 1.0875rem`, 
    }
  },
  footer: {
    background: `#ffffff`,
    position: 'fixed',
    bottom: '0rem',
    zIndex: '10',
    width: '100vw',    
  },
  footerWrap: {
    padding: `1rem`,
    maxWidth: '70vw',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90vw',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100vw'
    },
  }
}));

export default useStyles