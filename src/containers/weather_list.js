import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(citydata) {
    const name = citydata.city.name;
    const temps = citydata.list.map(weather => weather.main.temp);
    const pressure = citydata.list.map(weather => weather.main.pressure);
    const humidity = citydata.list.map(weather => weather.main.humidity);
    const { lon, lat } = citydata.city.coord;
    // const temps = citydata.list.
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color='orange' units='K' /></td>
        <td><Chart data={pressure} color='green' units='hPa' /></td>
        <td><Chart data={humidity} color='black' units='%' /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {       // { weather } === (state); weather = state.weather
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);