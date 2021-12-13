import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const MapCard = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
  let isClearable = true
  return (
    <MapCard.Container>
      <Select options={options} isClearable />
      <Select options={options} isClearable/>
    </MapCard.Container>
  );
};

MapCard.Container = styled.div`
  position: absolute;
  z-index: 10;
  top: 30px;
  left: 30px;
`;

export default MapCard;
