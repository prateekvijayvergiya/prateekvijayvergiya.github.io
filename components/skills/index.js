import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Core from './core'
import Frameworks from './framework'
import Others from './others'
import Spacer from '../spacer'
import Blogs from './blogs'

const Skills = () => {
  const classes = useStyles()
  return (
    <Grid container justify={'center'} alignItems="center" spacing={2} direction={'column'}>
      <Grid item>
        <Typography variant={'h3'} gutterBottom>
          Skills
        </Typography>
      </Grid>
      <Core />
      <Frameworks />
      <Others />
      <Spacer spacing={5}/>
      <Blogs/>
      <Spacer spacing={5}/>
      <Grid item>
        <Typography variant={'h3'} gutterBottom align={'center'}>
          Download my Resume
        </Typography>
      </Grid>
      <Grid item>
        <a href={'/Prateek_Resume.pdf'} download={'Prateek_Resume.pdf'}>
          <img className={classes.imageContainer} src={'./skills/download.png'}/>
        </a>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(() => ({
  imageContainer: {
    width: '90px'
  },
}))

export default Skills