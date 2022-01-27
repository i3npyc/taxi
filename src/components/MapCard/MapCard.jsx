import React, { useState } from 'react';

import styled from 'styled-components';
import Select from 'react-select';

import { useDispatch } from 'react-redux';

import { getRoute } from '../../modules/map/actions';

import { CarCardList, Button } from '../index';

import carOne from '../../static/img/mapCard/auto01.png';
import carTwo from '../../static/img/mapCard/auto02.png';
import carThree from '../../static/img/mapCard/auto03.png';

const MapCard = ({ selectLabel, map }) => {
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
  const [isComplitedSend, setIsComplitedSend] = useState(false);
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
  const sendAddresses = () => {
    if (
      addresses &&
      addresses.address1.label.length &&
      addresses.address2.label.length
    ) {
      dispatch(getRoute(addresses));
      setIsComplitedSend(true);
    }
  };
  const cleanRoute = () => {
    setIsComplitedSend(false);
    setAddresses(null);
    map.removeLayer('route');
    map.removeSource('route');
  };

  const carsList = [
    { id: 1, type: 'Стандарт', price: '150 ₽', img: carOne },
    { id: 2, type: 'Премиум', price: '250 ₽', img: carTwo },
    { id: 3, type: 'Бизнес', price: '300 ₽', img: carThree }
  ];

  return (
    <MapCard.Container>
      <MapCard.Body>
        {!isComplitedSend ? (
          <>
            <MapCard.Form>
              <MapCard.Select>
                <Select
                  placeholder="Откуда"
                  onChange={e => handlerChange(e, 'address1')}
                  options={select.length ? select : options}
                  // isClearable={false}
                  value={addresses?.address1}
                />
              </MapCard.Select>
              <MapCard.Select>
                <Select
                  placeholder="Куда"
                  onChange={e => handlerChange(e, 'address2')}
                  options={select.length ? select : options}
                  // isClearable={false}
                  value={addresses?.address2}
                />
              </MapCard.Select>
            </MapCard.Form>
            <MapCard.AutoContainer>
              <MapCard.AutoBody>
                <CarCardList cars={carsList} />
              </MapCard.AutoBody>
              <Button onClick={sendAddresses} width="100%">
                Заказать
              </Button>
            </MapCard.AutoContainer>
          </>
        ) : (
          <MapCard.Complited>
            <MapCard.ComplitedTitle>Заказ размещен</MapCard.ComplitedTitle>
            <MapCard.ComplitedDescription>
              Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
            </MapCard.ComplitedDescription>
            <Button onClick={cleanRoute} width="100%">
              Сделать новый заказ
            </Button>
          </MapCard.Complited>
        )}
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

MapCard.Complited = styled.div`
  padding: 40px;
  max-width: 486px;
`;
MapCard.ComplitedTitle = styled.div`
  margin: 0px 0px 14px 0px;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
`;
MapCard.ComplitedDescription = styled.div`
  margin: 0px 0px 30px 0px;
  font-size: 18px;
  line-height: 21px;
  color: #7b7b7b;
`;

export default MapCard;
