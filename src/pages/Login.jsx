import React from 'react';
import styled from 'styled-components';
import { Map } from './index';
import { Button } from '../components/index'

class Login extends React.Component {
  state = { currentPage: '' };

  prevent = e => {
    e.preventDefault();
  };
  navigateTo = page => {
    this.setState({ currentPage: page });
  };
  render() {
    const { currentPage } = this.state;
    const PAGES = {
      map: <Map />
    };
    return (
      <>
        {!currentPage.length ? (
          <Login.Container>
            <Login.Form onSubmit={this.prevent}>
              <Login.Title>Войти</Login.Title>
              <Login.InputContainer>
                <Login.Label htmlFor="email">Email</Login.Label>
                <Login.Input type="email" name="email" id="email" size="28" />
              </Login.InputContainer>
              <Login.InputContainer>
                <Login.Label htmlFor="passord">Пароль</Login.Label>
                <Login.Input
                  type="password"
                  name="password"
                  id="password"
                  size="28"
                />
              </Login.InputContainer>
              <Login.ForgetContainer>
                <Login.Forget>Забыли пароль?</Login.Forget>
              </Login.ForgetContainer>
              {/* <Login.Button onClick={() => this.navigateTo('map')}>
                Войти
              </Login.Button> */}
              <Button>Войти</Button>

            </Login.Form>
          </Login.Container>
        ) : (
          <section>{PAGES[currentPage]}</section>
        )}
      </>
    );
  }
}

Login.Container = styled.div`
  max-width: 580px;
  padding: 55px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;
Login.Form = styled.form``;
Login.Title = styled.div`
  margin: 0px 0px 57px 0px;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
`;
Login.InputContainer = styled.div`
  margin: 0px 0px 25px 0px;
  &:last-child {
    margin: 0px 0px 0px 0px;
  }
`;
Login.Label = styled.label`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;
Login.Input = styled.input`
  display: block;
  width: 100%;
  height: 42px;
  background: transparent;
  border-bottom: 2px solid #e4e4e4;
  font-size: 18px;
  line-height: 21px;
  color: #828282;
`;
Login.ForgetContainer = styled.div`
  margin: 0px 0px 46px 0px;
  display: flex;
  justify-content: flex-end;
`;
Login.Forget = styled.button`
  font-size: 16px;
  line-height: 19px;
  color: #828282;
  &:hover {
    color: #fdbf5a;
  }
`;

export default Login;
