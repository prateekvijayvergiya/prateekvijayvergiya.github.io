import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconWithText from '../iconWithText'

const Others = () => {
  return (
    <Grid container item align="center" justify={'center'}>
      <Grid item xs={12} md={4} align={'center'}>
        <Typography variant={'h5'} gutterBottom>
          Others
        </Typography>
      </Grid>
      <Grid item container xs={12} spacing={1} md={8} justify={'space-evenly'}>
        <Grid item>
          <IconWithText icon='/skills/mongodb.jpg' text='MongoDB' />
        </Grid>
        <Grid item>
          <IconWithText icon='/skills/graphql.png' text='Graphql' />
        </Grid>
        <Grid item>
          <IconWithText icon='/skills/express_js.png' text='ExpressJs' />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Others