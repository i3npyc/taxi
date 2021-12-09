import React from 'react';
import mapboxGl from 'mapbox-gl';
import styled from 'styled-components';

class Map extends React.Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxGl.accessToken =
      'pk.eyJ1IjoiaTNqdXIiLCJhIjoiY2t3eXF5NzlyMG5wOTJ4cXJyMDl5em56eiJ9.vBY1qqX5aR20hHL9Lvzvdg';

    this.map = new mapboxGl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3056504, 59.9429126],
      zoom: 10
    });
  }
  componentWillUnmount() {
    this.map.remove();
  }
  render() {
    return (
      <Map.Wrapper>
        <Map.Map ref={this.mapContainer}></Map.Map>
      </Map.Wrapper>
    );
  }
}

Map.Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
Map.Map = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default Map;
