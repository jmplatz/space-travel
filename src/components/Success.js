import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
} from '@material-ui/core'

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;

    return (
      <React.Fragment>
        <Dialog
          open
          fullWidth
          maxWidth='sm'
        >
          <DialogContent>
            <DialogTitle>Thank You For Your Submission</DialogTitle>
            <br />
            <DialogContentText>
              You will receive an email confirmation of your booking shortly
            </DialogContentText>
            <DialogContentText>
              Email: {values.email}
            </DialogContentText>
            <DialogContentText>
              Day of Travel: {values.dayOfTravel}
            </DialogContentText>
            <DialogContentText>
              Confirmation Number: {Math.floor((Math.random() * 1000000))}
            </DialogContentText>
            <DialogContentText>
              Total: ${values.total}
            </DialogContentText>
            <br />
            <Link to="/">
              <Button
                color="primary"
                variant="contained"
              >Return Home
              </Button>
            </Link>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default Success;