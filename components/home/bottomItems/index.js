import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const BottomItems = ({value, text}) => {
  return (
    <Grid item align={'center'}>
      <Typography variant={'h4'} color='textSecondary'>
        {value}
      </Typography>
      <Typography variant={'h4'}>
        {text}
      </Typography>
    </Grid>
  )
}

export default BottomItems