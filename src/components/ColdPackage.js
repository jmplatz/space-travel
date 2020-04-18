import React, { Component } from 'react';
import spacesuit from './images/jsc2015e083483_alt.jpg'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Switch,
  Button,
  Card,
  CardMedia,
} from '@material-ui/core'


export class ColdPackage extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  changePrice = () => {
    this.props.addColdPackage();
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
            <DialogTitle>The Warm and Cozy Package</DialogTitle>
            <Card>
              <CardMedia
                component="img"
                alt="Nasa Spacesuit"
                height="200"
                image={spacesuit}
                title="Nasa Spacesuit"
              />
            </Card>
            <br />
            <br />
            <DialogContentText>
              The average temperature on Mars over the past 7 days has been {values.temperature} °C.
              <br />
              <br />
              Would you like to purchase the Warm and Cozy Package?
            </DialogContentText>
            <DialogContentText>
              Click to select
                <Switch
                onClick={handleChange('coldPackage')}
                onChange={this.changePrice}
                checked={values.coldPackage}
              />
                $20,000 add-on
              </DialogContentText>
            <br />
            <Button
              color="secondary"
              size="medium"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              size="medium"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default ColdPackage;
