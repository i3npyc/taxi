import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { Button, ErrorMessage, Loader } from '../index';

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
        {isFetching && <Loader />}
        <Button isFetching={isFetching} type="submit">
          {buttonText}
        </Button>
        <ErrorMessage>{error}</ErrorMessage>
        <ErrorMessage>{registrationError}</ErrorMessage>
        {isRegister ? (
          <CustomForm.Question>
            Уже зарегестрированны? <Link to="/login">Войти</Link>
          </CustomForm.Question>
        ) : (
          <CustomForm.Question>
            Новый пользователь? <Link to="/registration">Регистрация</Link>
          </CustomForm.Question>
        )}
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
CustomForm.Question = styled.p`
  margin-top: 33px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #828282;
  a {
    color: #fdbf5a;
    text-decoration: none;
  }
`;

export default CustomForm;
