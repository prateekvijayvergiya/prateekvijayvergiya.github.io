import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'

const Resume = () => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Grid container>
        <Grid item container justify='flex-end' alignItems="center">
          <Grid item xs={8} sm={8}>
            <Typography variant={'h2'}>
              RESUME
            </Typography>
          </Grid>
          <Grid item xs={4} sm={2}>
            Download
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item container>
            <Grid item xs={8}>
              <Divider/>
            </Grid>
            <Grid item container>
              <Grid item>
                Hola
              </Grid>
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
      marginRight: 0,
    },
  }
}))

export default Resume