import React  from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const CarCard = ({ type, price, img }) => {

  const ref = useRef()

  const [test, setTest] = useState('Стандарт')
 
  const heandlerActive = (type) => {
    setTest((prev => prev == type))
    console.log(type)
  }


  return (
    <CarCard.Auto ref={ref} className={ test === type ? 'active' : ''} onClick={() => heandlerActive(type)}>
      <CarCard.AutoType>{type}</CarCard.AutoType>
      <CarCard.AutoLabelPrice>Стоимость</CarCard.AutoLabelPrice>
      <CarCard.AutoPrice>{price}</CarCard.AutoPrice>
      <CarCard.AutoCar>
        <img src={img} alt="" />
      </CarCard.AutoCar>
    </CarCard.Auto>
  );
};

CarCard.Auto = styled.div`
  padding: 13px;
  flex: 0 1 33.333%;
  background: #ffffff;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  &.active {
    background: red;
  }
`;
CarCard.AutoType = styled.p`
  font-size: 16px;
  line-height: 19px;
`;
CarCard.AutoLabelPrice = styled.p`
  font-size: 11px;
  line-height: 13px;
  color: #828282;
`;
CarCard.AutoPrice = styled.p`
  margin: 0px 0px 13px 0px;
  font-size: 24px;
  line-height: 28px;
`;
CarCard.AutoCar = styled.p``;

export default CarCard;
