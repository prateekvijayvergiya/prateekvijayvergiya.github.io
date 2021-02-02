import React from 'react'
import { Box, Grid, Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Spacer from '../spacer';
import ContactForm from './contactForm'
import LinkIcons from './linkIcons'

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
            <LinkIcons href={'https://www.facebook.com/prateek.vijay.73'} icon={FacebookIcon} />
            <LinkIcons href={'https://www.instagram.com/prateekvijayvergiya/'} icon={InstagramIcon} />
            <LinkIcons href={'https://www.linkedin.com/in/prateekvijayvergiya/'} icon={LinkedInIcon} />
            <LinkIcons href={'https://twitter.com/prateekvijay18'} icon={TwitterIcon} />
          </Grid>
        </Grid>
        <Grid container spacing={2} item xs={12} sm={6} justify={!largeScreen ? 'center' : 'flex-start'}>
          <Grid item xs={12}>
            Looking Forward
          </Grid>
          <Grid item xs={12}>
            <ContactForm />
          </Grid>
        </Grid>
      </Grid>
      <Spacer spacing={5} />
      <Grid container justify={'center'} direction={'column'} alignItems={'center'}>
        <Grid item>
          <Typography fontFamily={'ProximaNovaT'} variant={'h5'} gutterBottom>
            Coffee with me.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={'body1'}>
            Always up for discussing new projects and ideas, so just ping me and we will discuss it over a cup of coffee.
          </Typography>
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