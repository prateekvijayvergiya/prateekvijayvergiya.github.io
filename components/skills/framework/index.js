import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconWithText from '../iconWithText'

const Frameworks = () => {
  return (
    <Grid container item align="center" justify={'center'}>
      <Grid item xs={12} md={4} align={'center'}>
        <Typography variant={'h5'} gutterBottom>
          Libraries / Frameworks
        </Typography>
      </Grid>
      <Grid item container xs={12} spacing={1} md={8} justify={'space-evenly'}>
        <Grid item>
          <IconWithText icon='/skills/react_js.png' text='ReactJs' />
        </Grid>
        <Grid item>
          <IconWithText icon='/skills/node_js.png' text='NodeJs' />
        </Grid>
        <Grid item>
          <IconWithText icon='/skills/Next_js.png' text='NextJs' />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Frameworks