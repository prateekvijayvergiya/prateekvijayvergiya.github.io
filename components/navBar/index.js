import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Typography from '@material-ui/core/Typography'

const AppNavBar = ({setCurrentPage}) => {
  const classes = useStyles()
  return (
    <Navbar collapseOnSelect expand="sm" className={classes.container}>
      <Navbar.Brand>
        <Typography variant={'h5'}>
          Prateek Vijayvergiya
        </Typography>
        <Typography variant={'h6'}>
          Software Engineer
        </Typography>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className={classes.collapse}> 
        <Nav>
          <Nav.Link onClick={() => setCurrentPage('home')}>
            <Typography>
              HOME
            </Typography>
          </Nav.Link>
          <Nav.Link onClick={() => setCurrentPage('resume')}>
            <Typography>
              RESUME
            </Typography>
          </Nav.Link>
          <Nav.Link onClick={() => setCurrentPage('projects')}>
            <Typography>
              PROJECTS
            </Typography>
          </Nav.Link>
          <Nav.Link onClick={() => setCurrentPage('contact')}>
            <Typography>
              CONTACT
            </Typography>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const useStyles = makeStyles((theme) => ({
  collapse: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 50,
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: 250,
    },
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      marginLeft: 0,
    },
    [theme.breakpoints.down('lg')]: {
      padding: 30,
    },
    [theme.breakpoints.up('lg')]: {
      padding: 50,
      marginLeft: 200,
    },
  },
}))

export default AppNavBar