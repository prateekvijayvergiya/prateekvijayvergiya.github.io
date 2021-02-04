import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import RoundedTextArea from '../../common/roundedTextArea'
import { makeStyles } from '@material-ui/styles'
import Spacer from '../../spacer'

const WorkExperience = () => {
  const classes = useStyles()

  return (
    <Grid item container className={classes.container}>
      <Grid item xs={12} sm={3} align='center'>
        <RoundedTextArea text={'Work Experience'}/>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography variant={'h5'}>
          Engineer | Mindtree | Pune
        </Typography>
        <Typography>
          2019 - Present
        </Typography>
        <Typography>
          Placeholder words
        </Typography>
        <Spacer/>
        <Typography variant={'h5'}>
          Android Developer Intern | Jaipur Rugs | Jaipur
        </Typography>
        <Typography>
          May 2018 - July 2018
        </Typography>
        <Typography>
          Placeholder words
        </Typography>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 16,
    marginBottom: 16,
    [theme.breakpoints.down('sm')]: {
      marginTop: 8,
      marginBottom: 0,
    },
  }
}))

export default WorkExperience