import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import PhoneSharpIcon from '@material-ui/icons/PhoneSharp';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
import CopyrightSharpIcon from '@material-ui/icons/CopyrightSharp';
import IconWithText from './iconWithText';

const AppFooter = () => {
  const classes = useStyles()
  return (
    <footer>
      <Grid container className={classes.container} justify="space-evenly" alignItems="center">
        <IconWithText icon={PhoneSharpIcon} title={'Call'} subtitle={'8058677244'}/>
        <IconWithText icon={MailOutlineSharpIcon} title={'Email'} subtitle={'prateek.vijayudr27@gmail.com'}/>
        <IconWithText icon={CopyrightSharpIcon} title={'Copyright © 2020'} subtitle={'by Prateek Vijayvergiya.'}/>
    </Grid>
    </footer>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    height: 'auto',
    width: '100%',
    backgroundColor: '#e83556',
    color: 'white',
    padding: 40,
  },
}))

export default AppFooter