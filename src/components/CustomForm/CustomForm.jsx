import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import { useForm } from 'react-hook-form';

import { Button } from '../index';

import loader from '../../static/img/loader.svg';

const CustomForm = ({
  title,
  buttonText,
  isRegister,
  error,
  registrationError,
  isFetching,
  children,
  onSubmit
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();
  return (
    <CustomForm.Container>
      <CustomForm.Form onSubmit={handleSubmit(onSubmit)}>
        <CustomForm.Title>{title}</CustomForm.Title>
        {React.Children.map(children, child => {
          return child.props.name
            ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  register,
                  errors,
                  isFetching,
                  key: child.props.name
                }
              })
            : child;
        })}
        <CustomForm.ForgetContainer>
          {isRegister && <CustomForm.Forget>Забыли пароль?</CustomForm.Forget>}
        </CustomForm.ForgetContainer>
        {isFetching && (
          <CustomForm.Loader>
            <img src={loader} width={100} height={100} alt="" />
          </CustomForm.Loader>
        )}
        <Button isFetching={isFetching} type="submit">
          {buttonText}
        </Button>
        <CustomForm.Error>{error}</CustomForm.Error>
        <CustomForm.Error>{registrationError}</CustomForm.Error>
      </CustomForm.Form>
    </CustomForm.Container>
  );
};

CustomForm.propTypes = {
  title: propTypes.string,
  listInput: propTypes.array,
  buttonText: propTypes.string,
  onSubmit: propTypes.func,
  register: propTypes.bool,
  onClick: propTypes.func
};

CustomForm.Container = styled.div`
  margin: 59px 0px 0px 68px;
  max-width: 580px;
  padding: 55px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  position: relative;
`;
CustomForm.Form = styled.form`
  width: 355px;
`;
CustomForm.Title = styled.div`
  margin: 0px 0px 57px 0px;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
`;
CustomForm.ForgetContainer = styled.div`
  margin: 0px 0px 46px 0px;
  display: flex;
  justify-content: flex-end;
  justify-self: flex-end;
`;
CustomForm.Forget = styled.button`
  font-size: 16px;
  line-height: 19px;
  color: #828282;
  &:hover {
    color: #fdbf5a;
  }
`;
CustomForm.Error = styled.p`
  margin: 20px 0px 0px 0px;
  text-align: center;
  color: red;
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translate(-50%, 0%);
`;
CustomForm.Loader = styled.div`
  img {
    position: absolute;
    bottom: 9%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
`;

export default CustomForm;
