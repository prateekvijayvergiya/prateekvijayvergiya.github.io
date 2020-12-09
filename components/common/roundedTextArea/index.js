import React from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const RoundedTextArea = ({className, text, backgroundColor}) => {
  const classes = useStyles({backgroundColor})
  return (
    <div className={classNames(classes.container, className)}>
      <Typography>{text}</Typography>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    width: 130,
    height: 130,
    borderRadius: '50%',
    display: 'block',
    overflow: 'hidden',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: props => props.backgroundColor || '#e83556',
    [theme.breakpoints.down('sm')]: {
      width: 85,
      height: 85,
    },
  }
}))

export default RoundedTextArea