import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import { Input, Button } from '../index';

import loader from '../../static/img/loader.svg';

const CustomForm = ({
  title,
  listInput,
  buttonText,
  onSubmit,
  register,
  onClick,
  error,
  isFetching
}) => {
  return (
    <CustomForm.Container>
      <CustomForm.Form onSubmit={onSubmit}>
        <CustomForm.Title>{title}</CustomForm.Title>
        {listInput.map(input => (
          <Input
            key={input?.id}
            type={input?.type}
            name={input?.name}
            id={input?.id}
            label={input?.label}
          />
        ))}
        <CustomForm.ForgetContainer>
          {register ? (
            register
          ) : (
            <CustomForm.Forget>Забыли пароль?</CustomForm.Forget>
          )}
        </CustomForm.ForgetContainer>
        {isFetching ? (
          <CustomForm.Loader>
            <img
              src={loader}
              style={{ width: 150 + 'px', height: 150 + 'px' }}
              alt=""
            />
          </CustomForm.Loader>
        ) : (
          <Button onClick={onClick} type="submit">
            {buttonText}
          </Button>
        )}
        <CustomForm.Error>{error}</CustomForm.Error>
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
`;
CustomForm.Loader = styled.div`
  text-align: center;
`;

export default CustomForm;
