import React from 'react';
import styled from 'styled-components';
import { Button, Input, Card } from '../components/index';
import { connect } from 'react-redux';
import { logOut } from '../auth/actions';
import { card } from '../card/actions';

class Profile extends React.Component {
  state = {
    numberCardValue: '',
    nameValue: '',
    dataValue: '',
    cvcValue: ''
  };
  hendlerChange = e => {
    switch (e.target.name) {
      case 'number':
        this.setState({
          numberCardValue: e.target.value.match(/.{1,4}/g).join(' ')
        });
        break;
      case 'name':
        this.setState({ nameValue: e.target.value });
        break;
      case 'data':
        this.setState({
          dataValue:
            e.target.value.slice(0, 2) + '/' + e.target.value.slice(2.4)
        });
        break;
      case 'cvc':
        this.setState({ cvcValue: e.target.value });
        break;
      default:
        return;
    }
  };
  submitCard = () => {
    this.props.card(
      this.state.numberCardValue,
      this.state.dataValue,
      this.state.nameValue,
      this.state.cvcValue
    );
  };
  numberValue = value => value.replace(/[^\d]/g, '');
  render() {
    const { numberCardValue, nameValue, dataValue, cvcValue } = this.state;
    return (
      <Profile.Container>
        <Profile.Content>
          <Profile.Header>
            <Profile.Title>Профиль</Profile.Title>
            <Profile.Label>Введите платежные данные</Profile.Label>
          </Profile.Header>
          <Profile.Data>
            <Profile.DataItem>
              <Profile.Form>
                <Input
                  hendlerChange={this.hendlerChange}
                  value={nameValue.toLocaleUpperCase()}
                  name="name"
                  type="text"
                  black
                  label="Имя владельца"
                />
                <Input
                  hendlerChange={this.hendlerChange}
                  value={this.numberValue(numberCardValue)}
                  type="text"
                  black
                  label="Номер карты"
                  maxlength="16"
                  name="number"
                />
                <Profile.InputBlock>
                  <Input
                    hendlerChange={this.hendlerChange}
                    maxlength="4"
                    type="text"
                    value={this.numberValue(dataValue)}
                    name="data"
                    black
                    label="MM/YY"
                  />
                  <Input
                    hendlerChange={this.hendlerChange}
                    maxlength="3"
                    type="text"
                    value={this.numberValue(cvcValue)}
                    name="cvc"
                    black
                    label="CVC"
                  />
                </Profile.InputBlock>
              </Profile.Form>
            </Profile.DataItem>
            <Profile.DataItem>
              <Card dataValue={dataValue} numberCard={numberCardValue} />
            </Profile.DataItem>
          </Profile.Data>
          <Profile.BlockButton>
            <Button onClick={this.submitCard}>Сохранить</Button>
          </Profile.BlockButton>
        </Profile.Content>
      </Profile.Container>
    );
  }
}

Profile.Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    0deg,
    rgba(28, 26, 25, 0.5),
    rgba(28, 26, 25, 0.5)
  );
`;
Profile.Content = styled.div`
  padding: 59px 44px 67px 44px;
  position: absolute;
  width: 888px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
Profile.Header = styled.div`
  margin: 0px 0px 50px 0px;
`;
Profile.Title = styled.div`
  margin: 0px 0px 13px 0px;
  text-align: center;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
`;
Profile.Label = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 21px;
  color: #7b7b7b;
`;
Profile.Data = styled.div`
  margin: 0px 0px 15px 0px;
  display: flex;
  gap: 99px;
`;
Profile.BlockButton = styled.div`
  display: flex;
  justify-content: center;
`;
Profile.DataItem = styled.div`
  flex: 0 1 50%;
`;
Profile.Form = styled.form``;
Profile.InputBlock = styled.div`
  display: flex;
  gap: 35px;
`;

export const ProfilewithAuth = connect(null, { logOut, card })(Profile);
