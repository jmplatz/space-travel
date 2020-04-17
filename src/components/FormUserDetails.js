import React, { Component } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from '@material-ui/core';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
        <Dialog
          open
          fullWidth
          maxWidth='sm'
        >
          <DialogContent>
            <DialogTitle>Enter Your Personal Details</DialogTitle>
            <TextField
              required
              fullWidth
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
            />
            <br />
            <TextField
              required
              fullWidth
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
            />
            <br />
            <TextField
              required
              fullWidth
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
            />
          </DialogContent>
          <br />
          <DialogContent>
            <Button
              color="primary"
              size="medium"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </DialogContent>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </Dialog>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;