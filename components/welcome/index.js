import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { makeStyles } from '@material-ui/core/styles'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'
import { Grid, Typography } from '@material-ui/core'

const WelcomeGreetings = ({ canShowGreeting, setCanShowGreeting}) => {
  const classes = useStyles()
  return (
    <Dialog open={canShowGreeting} fullScreen>
      <DialogContent className={classes.container}>
        <DialogContentText>
          <Grid container direction={'column'} spacing={2} alignItems={'center'} justify="center">
            <Grid item className={classes.textContainer}>
              <Typography variant={'h4'} color='initial'>
                Hi, I think you are here because you wanna hire me or
              </Typography>
              <Typography variant={'h4'} gutterBottom>
                you wanna know more about me !!!
              </Typography>
              <Typography variant={'h4'} gutterBottom>
                Well, then what are you waiting for ??
              </Typography>
            </Grid>
            <Grid item align='center'>
              <Button variant="contained" color="primary" onClick={() => setCanShowGreeting(false)}>
                start exploring
              </Button>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    color: 'white'
  }
}))

export default WelcomeGreetings