import React from 'react'

import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import WorkExperience from './workExperience'
import Education from './education'

const Resume = () => {
  const classes = useStyles()
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('sm'))
  return (
    <Box className={classes.container}>
      <Grid container>
        <Grid item container justify='flex-end' alignItems="center">
          <Grid item xs={8} sm={8}>
            <Typography variant={'h2'} gutterBottom>
              RESUME
            </Typography>
          </Grid>
          <Grid item xs={4} sm={2}>
            Download
          </Grid>
        </Grid>
        <Grid item container spacing={3}>
          <Grid item container xs={12} sm={9}>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <WorkExperience />
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Education />
          </Grid>
          <Grid item container xs={12} sm={3} direction={largeScreen ? 'column' : 'row'}>
            <Grid item>
              Hola
            </Grid>
            <Grid item>
              Hola
            </Grid>
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
  }
}))

export default Resume