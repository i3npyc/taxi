import React from 'react';
import styled from 'styled-components';

const CarCard = ({ id, type, price, img, activeCar, onSelect }) => {
  return (
    <CarCard.Auto
      className={activeCar === id ? 'active' : ''}
      onClick={() => onSelect(id)}
    >
      <CarCard.AutoType>{type}</CarCard.AutoType>
      <CarCard.AutoLabelPrice>Стоимость</CarCard.AutoLabelPrice>
      <CarCard.AutoPrice>{price}</CarCard.AutoPrice>
      <CarCard.AutoCar>
        <img style={{ width: 95 + 'px', height: 72 + 'px'}} src={img} alt="" />
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
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.3s ease 0s;
  &.active {
    opacity: 1;
  }
  &:hover {
    opacity: 1

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
