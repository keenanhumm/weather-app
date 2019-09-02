import React, { Component } from 'react';

class Form extends Component {
  handleClickGetWeather = (event) => {
    console.log(event);
    event.preventDefault();

    const {
      target: {
        elements: {
          name: {
            country: { value: countryInput = "" },
            city: { value: cityInput = "" }
          }
        }
      }
    } = event;

    const {
      props: { getWeather = () => {} }
    } = this;

    if (cityInput) getWeather(cityInput, countryInput);
  }
 
  render() {

    return (
      <form onSubmit={this.handleClickGetWeather}>
        <input type="text" name="city" placeholder="Enter a city" />
        <input type="text" name="country" placeholder="Enter a country" />
        <button type="submit">Get weather</button>
      </form>
    )
  }
}

export default Form;