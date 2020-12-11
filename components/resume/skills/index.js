import React, { Fragment } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'
import Divider from '@material-ui/core/Divider'
import Spacer from '../../spacer'

const Skills = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Avatar className={classes.avatar}>
        <SvgIcon>
          <PriorityHighIcon />
        </SvgIcon>
      </Avatar>
      <Spacer spacing={1}/>
      <Typography variant={'subtitle1'} gutterBottom>Skills</Typography>
      <Divider/>
      <Spacer spacing={1}/>
      <Typography variant={'body2'} gutterBottom>Skills</Typography>
      <Typography variant={'body2'} gutterBottom>Skills</Typography>
      <Typography variant={'body2'} gutterBottom>Skills</Typography>
      <Typography variant={'body2'} gutterBottom>Skills</Typography>
    </Fragment>
  )
}

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: '#61d0d4'
  },
}))

export default Skills