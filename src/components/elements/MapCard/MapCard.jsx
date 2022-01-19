import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteRoute, getRoute } from '../../../map/actions';
import Select from 'react-select';
import Button from '../Button/Button';
import CarCard from './CarCard';
import carOne from '../../../static/img/mapCard/auto01.png';
import carTwo from '../../../static/img/mapCard/auto02.png';
import carThree from '../../../static/img/mapCard/auto03.png';

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
      dispatch(deleteRoute());
      console.log('complited');
      // setAddresses((state) => {
      //   console.log(state)
      // })
    }
  };

  const carsList = [
    { id: 1, type: 'Стандарт', price: '150 ₽', img: carOne },
    { id: 2, type: 'Премиум', price: '250 ₽', img: carTwo },
    { id: 3, type: 'Бизнес', price: '300 ₽', img: carThree }
  ];

  const heandleAuto = (type) => {
    console.log(type)
  }

  return (
    <MapCard.Container>
      <MapCard.Body>
        <MapCard.Form onSubmit={sendAddresses}>
          <MapCard.Select>
            <Select
              onChange={e => handlerChange(e, 'address1')}
              options={select.length ? select : options}
              isClearable
              value={addresses?.address1}
            />
          </MapCard.Select>
          <MapCard.Select>
            <Select
              onChange={e => handlerChange(e, 'address2')}
              options={select.length ? select : options}
              isClearable
              value={addresses?.address2}
            />
          </MapCard.Select>
        </MapCard.Form>
        <MapCard.AutoContainer>
          <MapCard.AutoBody>
            {carsList.map(car => (
              <CarCard
                onClick={heandleAuto}
                key={car?.id}
                type={car?.type}
                price={car?.price}
                img={car?.img}
              />
            ))}
          </MapCard.AutoBody>
          <Button width="100%">Заказать</Button>
        </MapCard.AutoContainer>
      </MapCard.Body>
    </MapCard.Container>
  );
};

MapCard.Container = styled.div`
  position: absolute;
  z-index: 10;
  top: 30px;
  left: 30px;
`;
MapCard.Body = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
MapCard.Form = styled.form`
  padding: 25px 30px;
`;
MapCard.Select = styled.div`
  margin: 0px 0px 10px 0px;
`;
MapCard.AutoContainer = styled.div`
  padding: 33px 46px;
  background: #ffffff;
  box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
MapCard.AutoBody = styled.div`
  margin: 0px 0px 30px 0px;
  display: flex;
  gap: 20px;
`;

export default MapCard;
