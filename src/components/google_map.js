import React, { Component } from 'react';

class GoogleMap extends Component {

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    return (
      //after below is rendered, it can be picked up from DOM using this.refs.map
      // used when 3rd party libraries don't know how to use React's render
      <div ref='map' />
    )
  }
}

export default GoogleMap;