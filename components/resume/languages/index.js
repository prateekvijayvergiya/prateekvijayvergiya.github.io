import React, { Fragment } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import LanguageIcon from '@material-ui/icons/Language';
import Divider from '@material-ui/core/Divider'
import Spacer from '../../spacer'

const Languages = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Avatar className={classes.avatar}>
        <SvgIcon>
          <LanguageIcon />
        </SvgIcon>
      </Avatar>
      <Spacer spacing={1}/>
      <Typography variant={'subtitle1'} gutterBottom>Languages</Typography>
      <Divider/>
      <Spacer spacing={1}/>
      <Typography variant={'body2'} gutterBottom>Languages</Typography>
      <Typography variant={'body2'} gutterBottom>Languages</Typography>
      <Typography variant={'body2'} gutterBottom>Languages</Typography>
      <Typography variant={'body2'} gutterBottom>Languages</Typography>
    </Fragment>
  )
}

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: '#61d0d4'
  },
}))

export default Languages