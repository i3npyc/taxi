import React from 'react'
import styled from 'styled-components';

const ErrorMessage = ({children}) => {
  return (
    <ErrorMessage.Text>{children}</ErrorMessage.Text>
  )
}

ErrorMessage.Text = styled.p`
  margin: 20px 0px 0px 0px;
  text-align: center;
  color: red;
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export default ErrorMessage