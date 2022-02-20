import React from 'react';
import styled from 'styled-components';

import loader from '../../static/img/loader.svg';

export const Loader = () => {
  return (
    <Loader.Container>
      <img src={loader} width={100} height={100} alt="" />
    </Loader.Container>
  );
};

Loader.Container = styled.div`
  img {
    position: absolute;
    bottom: 12%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
`;

export default Loader;
