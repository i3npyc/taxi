import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick, width, type }) => (
  <Button.Container onClick={onClick} type={type} width={width}>{children}</Button.Container>
);

Button.Container = styled.button`
  height: 61px;
  width: ${({ width = '353px' }) => width};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #fdbf5a;
  border-radius: 70px;
  font-size: 25px;
`;

export default Button;
