import React from 'react'
import { Box, Grid, Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Spacer from '../spacer';
import ContactForm from './contactForm'

const Contact = () => {
  const classes = useStyles()
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('sm'))
  return (
    <Box className={classes.container}>
      <Grid container spacing={2} justify={'center'}>
        <Grid container alignItems="center" direction={'column'} item xs={12} sm={6}>
          <Grid item>
            <Typography variant={'h2'} gutterBottom>
              CONTACT
            </Typography>
          </Grid>
          <Grid item>
            Want to hire me
          </Grid>
          <Grid item>
            <Spacer spacing={6} />
          </Grid>
          <Grid item>
            <Link 
              href={'https://www.facebook.com/prateek.vijay.73'} 
              target={'blank'} 
              color={'inherit'} 
              className={classes.icon}>
                <FacebookIcon fontSize={'large'} color={'inherit'} />
            </Link>
            <Link 
              href={'https://www.instagram.com/prateekvijayvergiya/'} 
              target={'blank'} 
              color={'inherit'} 
              className={classes.icon}>
                <InstagramIcon fontSize={'large'} />
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={2} item xs={12} sm={6} justify={!largeScreen ? 'center' : 'flex-start'}>
          <Grid item xs={12}>
            Looking Forward
          </Grid>
          <Grid item xs={12}>
            <ContactForm/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: 16,
    marginRight: 16,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 8,
      marginRight: 8,
    },
  },
  icon: {
    '&:hover': {
      color: 'inherit'
    },
  }
}))

export default Contact