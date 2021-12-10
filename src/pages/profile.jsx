import React from 'react';
import styled from 'styled-components';
import { Button, Input } from '../components/index';
import { connect } from 'react-redux';
import { logOut } from '../auth/actions';
import circle from '../static/img/card/circle.svg';
import chip from '../static/img/card/chip.svg';
import mastercard from '../static/img/card/mastercard.svg';

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
        this.setState({ numberCardValue: e.target.value });
        break;
      case 'name':
        this.setState({ nameValue: e.target.value });
        break;
      case 'data':
        this.setState({ dataValue: e.target.value });
        break;
      case 'cvc':
        this.setState({ cvcValue: e.target.value });
        break;
      default:
        return;
    }
  };
  numberValue = value => value.replace(/[^\d]/g, '');
  render() {
    const { numberCardValue, nameValue, dataValue, cvcValue } = this.state;
    let numberCard = numberCardValue.replace(/[^\d]/g, '').substring(0, 16);
    numberCard = numberCard !== '' ? numberCard.match(/.{1,4}/g).join(' ') : '';
    return (
      <Profile.Container>
        <Profile.Content>
          <Profile.Header>
            <Profile.Title>Профиль</Profile.Title>
            <Profile.Label>Введите платежные данные</Profile.Label>
          </Profile.Header>
          <Profile.Data>
            <Profile.DataItem>
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
            </Profile.DataItem>
            <Profile.DataItem>
              <Profile.Card>
                <Profile.CardContent>
                  <Profile.CardColumn>
                    <Profile.CardCircle></Profile.CardCircle>
                    <Profile.CardDate>
                      {dataValue.slice(0, 2) + '/' + dataValue.slice(2, 4)}
                    </Profile.CardDate>
                  </Profile.CardColumn>
                  <Profile.CardColumn>
                    <Profile.CardNumber>{numberCard}</Profile.CardNumber>
                  </Profile.CardColumn>
                  <Profile.CardColumn>
                    <Profile.Chip></Profile.Chip>
                    <Profile.MasterCard></Profile.MasterCard>
                  </Profile.CardColumn>
                </Profile.CardContent>
              </Profile.Card>
            </Profile.DataItem>
          </Profile.Data>
          <Profile.BlockButton>
            <Button>Сохранить</Button>
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
Profile.InputBlock = styled.div`
  display: flex;
  gap: 35px;
`;
Profile.Card = styled.div`
  width: 100%;
  padding: 16px 16px 16px 27px;
  height: 182px;
  background: #ffffff;
  box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
Profile.CardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
Profile.CardColumn = styled.div`
  display: flex;
  justify-content: space-between;
`;
Profile.CardCircle = styled.div`
  width: 33px;
  height: 33px;
  background: url(${circle}) no-repeat;
`;
Profile.CardDate = styled.div`
  font-size: 12px;
  line-height: 14px;
`;
Profile.CardNumber = styled.div`
  font-size: 21px;
  line-height: 25px;
`;
Profile.Chip = styled.div`
  width: 30px;
  height: 30px;
  background: url(${chip}) no-repeat;
`;
Profile.MasterCard = styled.div`
  width: 46px;
  height: 28px;
  background: url(${mastercard}) no-repeat;
`;

export const ProfilewithAuth = connect(null, { logOut })(Profile);
