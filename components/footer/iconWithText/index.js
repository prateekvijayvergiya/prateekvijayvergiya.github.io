import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import SvgIcon from '@material-ui/core/SvgIcon'
import Typography from '@material-ui/core/Typography'

const IconWithText = ({icon: Icon, title, subtitle}) => {
  const classes = useStyles()
  return (
    <Grid container alignItems="center" justify="center" spacing={2} item xs={12} sm={6} md={4}>
      <Grid item>
        <Avatar className={classes.avatar}>
          <SvgIcon htmlColor={'yellow'}>
            <Icon/>
          </SvgIcon>
        </Avatar>
      </Grid>
      <Grid item>
        <Typography variant={'h6'}>
          {title}
        </Typography>
        <Typography>
          {subtitle}
        </Typography>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: 'blue'
  },
}))

export default IconWithText