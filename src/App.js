import React from 'react';

// components 
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

// api
import { getWeatherEndpoint } from './endpoints';

class App extends React.Component {
  getWeather = async () => {
    const response = await fetch(getWeatherEndpoint());
    const data = await response.json();
    console.log('data:', data);
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;