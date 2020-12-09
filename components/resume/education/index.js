import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import RoundedTextArea from '../../common/roundedTextArea'
import { makeStyles } from '@material-ui/styles'
import Spacer from '../../spacer'

const Education = () => {
  const classes = useStyles()

  return (
    <Grid item container className={classes.container}>
      <Grid item xs={12} sm={3} align='center'>
        <RoundedTextArea text={'Education'}/>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography variant={'h5'}>
          B.Tech | Jaipur Engineering College and Research Centre | Jaipur
        </Typography>
        <Typography>
          2015 - 2019
        </Typography>
        <Spacer/>
        <Typography variant={'h5'}>
          Senior Secondary | Guru Nanak Public School | Udaipur 
        </Typography>
        <Typography>
          2014 - 2015
        </Typography>
        <Spacer/>
        <Typography variant={'h5'}>
          Secondary | Guru Nanak Public School | Udaipur 
        </Typography>
        <Typography>
          2012 - 2013
        </Typography>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    // marginTop: 16,
    // marginBottom: 16,
    // [theme.breakpoints.down('sm')]: {
    //   marginTop: 8,
    //   marginBottom: 0,
    // },
  }
}))

export default Education