import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class EmailAlert extends Component {

  render() {

  return (
    <div>
      <Dialog
        fullWidth={true}
        open={this.props.openDialogBool}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Please note:'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {this.props.emailAlertDialogue}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.emailAlertClose} color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )};
}

export default EmailAlert;
