import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const HomePage = () => {
  const classes = useStyles()
  return (
    <Grid container justify="space-evenly" >
      <Grid item xs={12} md={4} lg={4} align='center'> 
        <div className={classes.imageContainer}>
          <Image src='/profile.JPG' width={385} height={380}/>
        </div>
      </Grid>
      <Grid item container xs={12} md={6} lg={6} justify="flex-start" spacing={2}>
        <Grid item align='center'>
          <Typography variant={'h3'} gutterBottom={true}>
            Hello, Hola, नमस्ते !
          </Typography>
          <Typography variant={'h5'}>
            I grind HTML and CSS and then weld them with Reactjs into beautiful and efficient websites.
          </Typography>
        </Grid>
        <Grid item container justify="space-evenly" alignItems="center">
          <Grid item align='center'>
            <div className={classNames(classes.titleContainer, classes.resume)}>
              <p>Resume</p>
            </div>
          </Grid>
          <Grid item align='center'>
            <div className={classNames(classes.titleContainer, classes.portfolio)}>
              <p>My Work</p>
            </div>
          </Grid>
          <Grid item align='center'>
            <div className={classNames(classes.titleContainer, classes.skills)}>
              <p>Skills</p>
            </div>
          </Grid>
        </Grid>
        <Grid item>
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story and let your users get to know you.
        </Grid>
      </Grid>
    </Grid>
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
  titleContainer: {
    width: 130,
    height: 130,
    borderRadius: '50%',
    display: 'block',
    overflow: 'hidden',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 85,
      height: 85,
    },
  },
  portfolio: {
    backgroundColor: '#61d0d4'
  },
  skills: {
    backgroundColor: '#d1c926'
  },
  resume: {
    backgroundColor: '#e83556',
  }
}))

export default HomePage