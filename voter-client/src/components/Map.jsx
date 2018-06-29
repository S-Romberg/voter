import React, { Component } from 'react';

class Map extends Component {

  render() {

    return (
      <div>
        <iframe alt="map" width="600" height="450" frameborder="0" src="https://www.google.com/maps/embed/v1/search?q=ballot&key=AIzaSyC9h7xh2v5hicF_trYIVmBDe9gnlP_b7JU" allowfullscreen></iframe>
      </div>
    );
  }
}

export default Map;

