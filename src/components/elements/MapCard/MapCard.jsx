import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import styled from 'styled-components';
import { deleteRoute, getRoute } from '../../../map/actions';
import Button from '../Button/Button'

const MapCard = ({ selectLabel }) => {
  const [select, setSelect] = useState([]);
  const [addresses, setAddresses] = useState({
    address1: {
      label: '',
      value: ''
    },
    address2: {
      label: '',
      value: ''
    }
  });
  const dispatch = useDispatch();

  const options = [
    { value: 'value', label: selectLabel[0] },
    { value: 'value2', label: selectLabel[1] },
    { value: 'value3', label: selectLabel[2] },
    { value: 'value4', label: selectLabel[3] }
  ];
  const handlerChange = (e, index) => {
    if (e) {
      const selected = options.filter(option => option.value !== e.value);
      setSelect(selected);
      const newAdresses = { ...addresses, [index]: e };
      setAddresses(newAdresses);
    }
  };
  const sendAddresses = e => {
    e.preventDefault();
    if (addresses.address1.label.length && addresses.address2.label.length) {
      dispatch(getRoute(addresses));
      dispatch(deleteRoute())
      console.log('complited')
      // setAddresses((state) => {
      //   console.log(state)
      // })
    }
  }

  return (
    <MapCard.Container>
      <MapCard.Form onSubmit={sendAddresses}>
        <Select
          onChange={e => handlerChange(e, 'address1')}
          options={select.length ? select : options}
          isClearable
          value={addresses?.address1}
        />
        <Select
          onChange={e => handlerChange(e, 'address2')}
          options={select.length ? select : options}
          isClearable
          value={addresses?.address2}
        />
        <Button>Заказать</Button>
      </MapCard.Form>
    </MapCard.Container>
  );
};

MapCard.Container = styled.div`
  position: absolute;
  z-index: 10;
  top: 30px;
  left: 30px;
`;
MapCard.Form = styled.form `
  
`;

export default MapCard;
