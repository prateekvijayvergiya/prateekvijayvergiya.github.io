import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'

const WelcomeGreetings = ({canShowGreeting}) => {
  console.log(canShowGreeting)
  return (
    <Dialog open={canShowGreeting} fullScreen>
      <DialogContent>
        <DialogContentText>
          Hello
          </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default WelcomeGreetings