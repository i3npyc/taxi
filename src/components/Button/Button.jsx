import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ children, onClick, width, type, isFetching }) => {
  return (
    <Button.Container className={isFetching ? 'hidden' : ''} onClick={onClick} type={type} width={width}>
      {children}
    </Button.Container>
  );
};

Button.propTypes = {
  children: propTypes.string,
  onClick: propTypes.func,
  width: propTypes.string,
  type: propTypes.string
};

Button.Container = styled.button`
  height: 61px;
  width: ${({ width = '353px' }) => width};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #fdbf5a;
  border-radius: 70px;
  font-size: 25px;
  transition: all 0.2s;
  &.hidden {
    opacity: 0;
  }
  &:hover {
    background: #FFA842;
  }
`;

export default Button;
