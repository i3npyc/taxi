import React from 'react';
import styled from 'styled-components';
import { Button, Input } from '../components/index';
import circle from '../static/img/card/circle.svg';
import chip from '../static/img/card/chip.svg';
import mastercard from '../static/img/card/mastercard.svg';

class Profile extends React.Component {
  state = {
    numberCard: '323232',
    numberCardValue: ''
  }

  change = (value) => {
    this.setState = ({numberCardValue : value})
  }
  render() {
    const { numberCard, numberCardValue } = this.state;
    return (
      <Profile.Container>
        <Profile.Content>
          <Profile.Header>
            <Profile.Title>Профиль</Profile.Title>
            <Profile.Label>Введите платежные данные</Profile.Label>
          </Profile.Header>
          <Profile.Data>
            <Profile.DataItem>
              <Input type="text" black label="Имя владельца" />
              <Input change={this.change} value={numberCardValue} type="number" black label="Номер карты" />
              <Profile.InputBlock>
                <Input type="number" black label="MM/YY" />
                <Input maxlength="3" type="number" black label="CVC" />
              </Profile.InputBlock>
            </Profile.DataItem>
            <Profile.DataItem>
              <Profile.Card>
                <Profile.CardContent>
                  <Profile.CardColumn>
                    <Profile.CardCircle></Profile.CardCircle>
                    <Profile.CardDate>05/08</Profile.CardDate>
                  </Profile.CardColumn>
                  <Profile.CardColumn>
                    <Profile.CardNumber>{numberCardValue}</Profile.CardNumber>
                  </Profile.CardColumn>
                  <Profile.CardColumn>
                    <Profile.Chip></Profile.Chip>
                    <Profile.MasterCard></Profile.MasterCard>
                  </Profile.CardColumn>
                </Profile.CardContent>
              </Profile.Card>
            </Profile.DataItem>
          </Profile.Data>
          <Button>Сохранить</Button>
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
  display: flex;
  gap: 99px;
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

export default Profile;
