import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import RoundedTextArea from '../common/roundedTextArea'

const HomePage = () => {
  const classes = useStyles()
  return (
    <Grid container justify="space-evenly" >
      <Grid item xs={12} md={4} lg={4} align='center'> 
        <div className={classes.imageContainer}>
          <img src='/profile.JPG' width={'100%'} height={'100%'}/>
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
            <RoundedTextArea text={'Resume'} backgroundColor={'#e83556'}/>
          </Grid>
          <Grid item align='center'>
            <RoundedTextArea text={'My Work'} backgroundColor={'#61d0d4'}/>
          </Grid>
          <Grid item align='center'>
            <RoundedTextArea text={'Skills'} backgroundColor={'#d1c926'}/>
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
}))

export default HomePage