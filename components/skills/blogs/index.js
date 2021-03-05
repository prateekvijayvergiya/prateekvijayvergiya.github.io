import React, { Fragment } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const Blogs = () => {
  const classes = useStyles()
  return (
    <Fragment>
      <Grid item align={'center'}>
        <Typography variant={'h3'} gutterBottom>
          Blogs
        </Typography>
      </Grid>
      <Grid item container alignItems="center" spacing={1}>
        <Grid item xs={2} md={4} align={'center'}>
          <a href={'https://medium.com/@prateek.vijayudr27'}>
            <img className={classes.imageContainer} src={'./skills/Medium.png'} />
          </a>
        </Grid>
        <Grid item xs={10} md={8}>
          <Typography gutterBottom variant={'h5'}>
            <Link href={'https://medium.com/swlh/server-side-rendering-with-next-js-56f84f98f9bd'}>
              Server-Side Rendering with Next.js
          </Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems="center" spacing={1}>
        <Grid item xs={2} md={4} align={'center'}>
          <a href={'https://dev.to/prateekvijayvergiya'}>
            <img className={classes.imageContainer} src={'./skills/Dev_logo.png'} />
          </a>
        </Grid>
        <Grid item xs={10} md={8}>
          <Typography gutterBottom variant={'h5'}>
            <Link href={'https://dev.to/prateekvijayvergiya/server-side-rendering-with-next-js-1896'}>
              Render the components on Server-Side with Next.js
          </Link>
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  )
}

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    width: '70px',
    [theme.breakpoints.down('xs')]: {
      width: '50px'
    },
  },

}))

export default Blogs