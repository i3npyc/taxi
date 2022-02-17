import React, { useState } from 'react';

import { CarCard } from '../index';

const CarCardList = ({ cars }) => {
  const [activeCar, setActiveCar] = useState(1);

  const onSelectCar = id => {
    setActiveCar(id);
  };

  return (
    <>
      {cars?.map(car => (
        <CarCard
          key={car?.id}
          id={car?.id}
          type={car?.type}
          price={car?.price}
          img={car?.img}
          activeCar={activeCar}
          onSelect={onSelectCar}
        />
      ))}
    </>
  );
};

export default CarCardList;
