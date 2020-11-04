import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import SvgIcon from '@material-ui/core/SvgIcon'
import Typography from '@material-ui/core/Typography'

const IconWithText = ({icon: Icon, title, subtitle}) => {
  const classes = useStyles()
  return (
    <Grid container alignItems="center" className={classes.container} spacing={2} item xs={12} md={4}>
      <Grid item>
        <Avatar className={classes.avatar}>
          <SvgIcon>
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

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: '#61d0d4'
  },
  container: {
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
    },
  }
}))

export default IconWithText