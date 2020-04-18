import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core/';


export class Confirm extends Component {
  componentDidMount() {
    this.props.setTotal();
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  changeDiscount = () => {
    this.props.setDiscount();
    this.props.setTotal();
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
            <DialogTitle>Confirm Your Booking</DialogTitle>
            <List>
              <ListItem>
                <ListItemText primary="Last Name" secondary={values.lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={values.email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Day of Travel" secondary={values.dayOfTravel} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Cold Package Selected" secondary={values.coldPackage ? 'Yes, $20,000 added' : 'No'} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Wind Package Selected" secondary={values.windPackage ? 'Yes, $8000 added' : 'No'} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Base Package Price" secondary="$80,000" />
              </ListItem>
            </List>
            <DialogTitle>
              Final Total is: ${values.total}
              <DialogContentText>
                (${(values.runningTotal * (1 - values.discount)).toFixed(0)} in discounts applied)
              </DialogContentText>
            </DialogTitle>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back
              </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm Booking</Button>
            <br />
            <br />
            <div>
              <ReactCountdownClock
                seconds={45}
                color="#e91e63"
                alpha={0.8}
                size={100}
                onComplete={this.changeDiscount}
              />
            </div>
            <br />
            <DialogContentText>Confirm your booking before the timer runs out and receive 10% off!</DialogContentText>
          </DialogContent>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </Dialog>
      </React.Fragment>
    );
  }
}

export default Confirm;