import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const MapCard = ({ selectLabel }) => {
  const [select, setSelect] = useState([])

  const options = [
    { value: 'value', label: selectLabel[0] },
    { value: 'value2', label: selectLabel[1] },
    { value: 'value3', label: selectLabel[2] },
    { value: 'value4', label: selectLabel[3] }
  ];
  const handlerChange = e => {
    if (e) {
      let selected = options.filter(option => option.value !== e.value);
      setSelect(selected)
    }
  };
  return (
    <MapCard.Container>
      <Select onChange={handlerChange} options={options} isClearable />
      <Select onChange={handlerChange} options={select} isClearable />
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
