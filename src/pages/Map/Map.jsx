import React from 'react';
import mapboxGl from 'mapbox-gl';
import { connect } from 'react-redux';

import { drawRoute } from '../../modules/map/functions/drawRoute';

import { selectAddreses, selectCoordinates } from '../../modules/map/selectors';
import { getAddresList } from '../../modules/map/actions';

import { MapCard } from '../../components/index';

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

    this.props.getAddresList();
  }
  componentWillUnmount() {
    this.map.remove();
  }
  render() {
    const { addresses, coordinates } = this.props;

    if (coordinates.length) drawRoute(this.map, coordinates);

    return (
      <Map.Wrapper>
        <Map.Map ref={this.mapContainer}></Map.Map>
        {this.props.addresses.length ? (
          <MapCard map={this.map} selectLabel={addresses} />
        ) : null}
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

export const MapContainer = connect(
  state => ({
    addresses: selectAddreses(state),
    coordinates: selectCoordinates(state)
  }),
  { getAddresList }
)(Map);
