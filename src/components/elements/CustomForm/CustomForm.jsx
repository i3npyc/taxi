import React from 'react';
import styled from 'styled-components';
import { Input, Button } from '../../index';

const CustomForm = ({
  title,
  listInput,
  buttonText,
  navigateTo,
  prevent,
  register
}) => {
  return (
    <CustomForm.Container>
      <CustomForm.Form onSubmit={prevent}>
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
        <Button openMap={navigateTo}>{buttonText}</Button>
      </CustomForm.Form>
    </CustomForm.Container>
  );
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

export default CustomForm;
