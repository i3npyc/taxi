import React from 'react';
import styled from 'styled-components';

const Input = ({ id, type, name, label }) => {
  return (
    <Input.Container>
      <Input.Label htmlFor={id}>{label}</Input.Label>
      <Input.Input type={type && 'text'} name={name} id={id} size="28" />
    </Input.Container>
  );
};

Input.Container = styled.div`
  margin: 0px 0px 25px 0px;
  &:last-child {
    margin: 0px 0px 0px 0px;
  }
`;
Input.Label = styled.label`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;
Input.Input = styled.input`
  display: block;
  width: 100%;
  height: 42px;
  background: transparent;
  border-bottom: 2px solid #e4e4e4;
  font-size: 18px;
  line-height: 21px;
  color: #828282;
`;

export default Input;
