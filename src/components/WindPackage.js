import React, { Component } from 'react';
import windstorm from './images/mars_0.jpg'
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


export class WindPackage extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  changePrice = () => {
    this.props.addWindPackage();
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
            <DialogTitle>Windy Day Package</DialogTitle>
            <Card>
              <CardMedia
                component="img"
                alt="Mars Windstorm Render"
                height="200"
                image={windstorm}
                title="Mars Windstorm Render"
              />
            </Card>
            <br />
            <br />
            <DialogContentText>
              The average wind speed on Mars over the past 7 days has been a blustery {values.windSpeed} km/h.
                <br />
              <br />
                Would you like to purchase the Windy Weather Package?
              </DialogContentText>
            <DialogContentText>
              Click to select
                <Switch
                onClick={handleChange('windPackage')}
                onChange={this.changePrice}
                checked={values.windPackage}
              />
                $8,000 add-on
              </DialogContentText>
            <br />
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
            >Continue
              </Button>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default WindPackage;
