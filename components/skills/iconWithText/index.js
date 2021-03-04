import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { Typography } from '@material-ui/core'

const IconWithText = ({icon, text}) => {
  const classes = useStyles()
  return (
    <Card className={classes.root} elevation={8}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='lol'
          height="100"
          image={icon}
          title=""
        />
      </CardActionArea>
      <CardContent >
        <Typography align='center'>
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    color: 'black',
    maxWidth: 100,
    
    '&:hover': {
      transition: 'all 0.2s ease-out',
      boxShadow: '0px 4px 8px rgba(38, 38, 38, 0.2)',
      top: -4,
      backgroundColor: 'white',
      transform: 'translate(0, -5px)',
    },

    '&:before': {
      zIndex: -1,
      transform: 'scale(2)',
      transformOrigin: '50% 50%',
      transition: 'transform 0.15s ease-out'
    },

    '&:hover:before': {
      transform: 'scale(2.15)'
    }
  },
}))

export default IconWithText