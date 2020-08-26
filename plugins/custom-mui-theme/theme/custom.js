import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  containerExample: {
    maxWidth: `300px`,
    marginBottom: `1.45rem`,
    padding: `2rem`
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
    padding: `9rem 1.0875rem 6rem 1.0875rem`,
    [theme.breakpoints.down('sm')]: {
      padding: `9rem 1.0875rem 9rem 1.0875rem`, 
    }    
  },
}));

export default useStyles