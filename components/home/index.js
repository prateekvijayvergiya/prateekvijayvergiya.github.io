import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import RoundedTextArea from '../common/roundedTextArea'
import BottomItems from './bottomItems'
import Spacer from '../spacer'
import { Fragment } from 'react'

const HomePage = () => {
  const classes = useStyles()
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('sm'))
  return (
    <Fragment>
      <Grid container item justify="space-evenly" >
        <Grid item xs={12} md={4} lg={4} align='center'>
          <div className={classes.imageContainer}>
            <img src='/profile1.jpg' width={'100%'} height={'100%'} />
          </div>
        </Grid>
        <Grid item container xs={12} md={6} lg={6} justify="flex-start" spacing={2}>
          <Grid item align='center'>
            <Typography variant={'h3'} gutterBottom>
              Hello, Hola, नमस्ते !
          </Typography>
            <Typography variant={'h5'}>
              I grind HTML and CSS and then weld them with Reactjs into beautiful and efficient websites.
          </Typography>
          </Grid>
          <Grid item container justify="space-evenly" alignItems="center">
            <Grid item align='center'>
              <RoundedTextArea text={'Resume'} backgroundColor={'#e83556'} />
            </Grid>
            <Grid item align='center'>
              <RoundedTextArea text={'My Work'} backgroundColor={'#61d0d4'} />
            </Grid>
            <Grid item align='center'>
              <RoundedTextArea text={'Skills'} backgroundColor={'#d1c926'} />
            </Grid>
          </Grid>
          <Grid item>
            <Typography gutterBottom>
              Hi I am Prateek Vijayvergiya, a 23 years old Web developer living in Pune. Currently I am working with Mindtree with some great minds as a Front End Developer.
          </Typography>
            <Typography>
              Apart from programming, I like to travel, to explore new places, want to trek most of the mountains of India. I am also fond of dramatics. Yeah I do accept that sometimes I crack lame jokes.
          </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Spacer spacing={4} />
      <Grid container justify="space-evenly" direction={!largeScreen ? 'column' : 'row'}>
        <BottomItems value={'15 000'} text={'lines of code'} />
        <BottomItems value={'1 000 000'} text={'pixels rendered'} />
        <BottomItems value={'432'} text={'cups of coffee drunk'} />
      </Grid>
    </Fragment>
  )
}

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    width: 385,
    height: 380,
    borderRadius: '50%',
    display: 'block',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      width: 310,
      height: 300,
    },
  },
}))

export default HomePage