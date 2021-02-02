import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from '@material-ui/core'

const LinkIcons = ({ href, icon: Icon }) => {
  const classes = useStyles()
  return (
    <Link
      href={href}
      target={'blank'}
      color={'inherit'}
      className={classes.icon}>
      <Icon fontSize={'large'} />
    </Link>
  )
}

const useStyles = makeStyles(() => ({
  icon: {
    '&:hover': {
      color: 'inherit'
    },
  }
}))

export default LinkIcons