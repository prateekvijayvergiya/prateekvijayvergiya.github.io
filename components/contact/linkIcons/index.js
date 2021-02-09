import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from '@material-ui/core'

const LinkIcons = ({ href, image }) => {
  const classes = useStyles()
  return (
    <Link
      href={href}
      target={'blank'}
      color={'inherit'}>
      <img src={image} className={classes.image}/>
    </Link>
  )
}

const useStyles = makeStyles(() => ({
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
  }
}))

export default LinkIcons