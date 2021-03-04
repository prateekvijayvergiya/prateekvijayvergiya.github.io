import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconWithText from '../iconWithText'

const Core = () => {
  return (
    <Grid container item align="center" justify={'center'}>
      <Grid item xs={12} md={4} align={'center'}>
        <Typography variant={'h5'} gutterBottom>
          Core
        </Typography>
      </Grid>
      <Grid item container xs={12} spacing={1} md={8} justify={'space-evenly'}>
        <Grid item>
          <IconWithText icon='/skills/html.png' text='HTML' />
        </Grid>
        <Grid item>
          <IconWithText icon='/skills/css.png' text='CSS' />
        </Grid>
        <Grid item>
          <IconWithText icon='/skills/javascript.png' text='Javascript' />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Core