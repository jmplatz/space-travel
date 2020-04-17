import React, { Component } from 'react';
import timelapse from './images/mars-016-1280.gif'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  Card,
  CardMedia,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core'

export class DayOfTravel extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  // Creates available tour dates
  addDays = (days) => {
    const result = new Date();
    result.setDate(result.getDate() + days);
    return result.toDateString();
  }

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
            <DialogTitle>Select the day you wish to travel</DialogTitle>
            <Card>
              <CardMedia
                component="img"
                alt="Mars timelapse"
                height="200"
                image={timelapse}
                title="Mars timelapse"
              />
            </Card>
          </DialogContent>
          <DialogContent>
            <DialogContentText>
              <FormControl component="fieldset">
                <FormLabel component="legend">Available Travel Dates</FormLabel>
                <RadioGroup aria-label="travelDates" name="travelDates" value={values.dayOfTravel} onChange={handleChange('dayOfTravel')}>
                  <FormControlLabel value={this.addDays(14)} control={<Radio />} label={this.addDays(14)} />
                  <FormControlLabel value={this.addDays(28)} control={<Radio />} label={this.addDays(28)} />
                  <FormControlLabel value={this.addDays(42)} control={<Radio />} label={this.addDays(42)} />
                  <FormControlLabel value={this.addDays(56)} control={<Radio />} label={this.addDays(56)} />
                  <FormControlLabel value={this.addDays(70)} control={<Radio />} label={this.addDays(70)} />
                  <FormControlLabel value={this.addDays(84)} control={<Radio />} label={this.addDays(84)} />
                  <FormControlLabel value={this.addDays(98)} control={<Radio />} label={this.addDays(98)} />
                </RadioGroup>
              </FormControl>
            </DialogContentText>
          </DialogContent>
          <DialogContent>
            <Button
              color="secondary"
              size="medium"
              variant="contained"
              onClick={this.back}
            >Back
              </Button>
            <Button
              color="primary"
              size="medium"
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

export default DayOfTravel;