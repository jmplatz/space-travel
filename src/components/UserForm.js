import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import DayOfTravel from './DayOfTravel';
import ColdPackage from './ColdPackage';
import WindPackage from './WindPackage';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  // Sets initial state
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    dayOfTravel: null,
    coldPackage: false,
    windPackage: false,
    temperature: 0,
    windSpeed: 0,
    coldPackagePrice: 20000,
    windPackagePrice: 8000,
    discount: .90,
    runningTotal: 80000,
    total: 0,
  }

  // As soon as the component mounts makes API Call
  componentDidMount() {
    const API_KEY = `${process.env.REACT_APP_API_KEY}`;
    const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

    // API call to NASA
    const getWeather = () => fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const {
          sol_keys,
          validity_checks,
          ...solData
        } = data
        return Object.entries(solData).map(([sol, data]) => {
          return {
            maxTemp: data.AT.mx,
            minTemp: data.AT.mn,
            windSpeed: data.HWS.av,
            date: new Date(data.First_UTC).toDateString()
          }
        })
      })

    // Set temperature and windspeed state
    getWeather().then(sols => {
      let averageMinTemp = 0;
      let averageWindSpeed = 0;

      sols.forEach(element => {
        averageMinTemp += element.minTemp;
        averageWindSpeed += element.windSpeed;
      });

      this.setState({
        temperature: (averageMinTemp /= sols.length).toFixed(2),
        windSpeed: (averageWindSpeed /= sols.length).toFixed(2)
      });
    });
  }

  // Proceed to next part of form
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  }

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  }

  // Handle form field changes
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  // Handle switch booleans
  handleBoolean = input => e => {
    this.setState({ [input]: e.target.checked })
  }

  // Reset Discount
  setDiscount = () => {
    this.setState({
      discount: 1,
    });
  }

  // Sets final total
  setTotal = () => {
    const { runningTotal, discount } = this.state;

    this.setState({
      total: runningTotal * discount
    })
  }

  // add/remove cold package
  addColdPackage = () => {
    const { runningTotal, coldPackage, coldPackagePrice } = this.state;

    if (!coldPackage) this.setState({ runningTotal: runningTotal + coldPackagePrice });
    else this.setState({ runningTotal: runningTotal - coldPackagePrice });
  }

  // add/remove wind package
  addWindPackage = () => {
    const { runningTotal, windPackage, windPackagePrice } = this.state;

    if (!windPackage) this.setState({ runningTotal: runningTotal + windPackagePrice });
    else this.setState({ runningTotal: runningTotal - windPackagePrice });
  }

  render() {
    // Passing state to components
    const { step } = this.state;
    const { firstName, lastName, email, dayOfTravel, coldPackage, windPackage, temperature, windSpeed, discount, runningTotal, total } = this.state;
    const values = { firstName, lastName, email, dayOfTravel, coldPackage, windPackage, temperature, windSpeed, discount, runningTotal, total }

    // Depending on step switches component
    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <DayOfTravel
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <ColdPackage
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleBoolean}
            getWeather={this.getWeather}
            addColdPackage={this.addColdPackage}
            values={values}
          />
        )
      case 4:
        return (
          <WindPackage
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleBoolean}
            getWeather={this.getWeather}
            addWindPackage={this.addWindPackage}
            values={values}
          />
        )
      case 5:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            setDiscount={this.setDiscount}
            setTotal={this.setTotal}
            values={values}
          />
        )
      case 6:
        return (
          <Success
            values={values}
          />
        )
    }
  }
}

export default UserForm;
