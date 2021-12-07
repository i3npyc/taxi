import React from 'react';
import styled from 'styled-components';

const Button = ({ children }) => (
  <Button.Container>{children}</Button.Container>
);

Button.Container = styled.button`
  height: 61px;
  padding: 0px 141px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #fdbf5a;
  border-radius: 70px;
  font-size: 25px;
`;

export default Button;
