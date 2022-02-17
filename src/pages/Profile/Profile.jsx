import React from 'react';

import styled from 'styled-components';

import { connect } from 'react-redux';

import { logOut } from '../../modules/auth/actions';
import { card, notpayment } from '../../modules/card/actions';
import { selectCardData, selectSuccess } from '../../modules/card/selectors';

import { ProfileComplited, ProfileCard } from '../../components/index';
import { selectIsFetching } from '../../modules/auth/selectors';

class Profile extends React.Component {
  state = {
    numberCardValue: '',
    nameValue: '',
    dataValue: '',
    cvcValue: ''
  };
  componentDidMount() {
    this.setState({
      numberCardValue: this.props.cardData.cardNumber
        ? this.props.cardData.cardNumber
        : '',
      nameValue: this.props.cardData.cardName
        ? this.props.cardData.cardName
        : '',
      dataValue: this.props.cardData.expiryDate
        ? this.props.cardData.expiryDate
        : '',
      cvcValue: this.props.cardData.cvc ? this.props.cardData.cvc : ''
    });
  }
  componentWillUnmount() {
    this.props.notpayment();
  }
  hendlerChangeNumber = e => {
    this.setState({
      numberCardValue: this.numberValue(e.target.value)
        ? this.numberValue(e.target.value)
            .match(/.{1,4}/g)
            .join(' ')
        : ''
    });
  };
  hendlerChangeName = e => {
    this.setState({ nameValue: this.textValue(e.target.value) });
  };
  hendlerChangeData = e => {
    this.setState({
      dataValue: this.numberValue(e.target.value)
        ? this.numberValue(e.target.value)
            .match(/.{1,2}/g)
            .join('/')
        : ''
    });
  };
  hendlerChangeCvc = e => {
    this.setState({ cvcValue: e.target.value });
  };

  submitCard = () => {
    this.props.card({
      number: this.state.numberCardValue,
      expiryDate: this.state.dataValue,
      name: this.state.nameValue,
      cvc: this.state.cvcValue
    });
  };
  numberValue = value => value.replace(/[^\d]/g, '');
  textValue = value => value.replace(/[^a-z\s]/gi, '');

  render() {
    const { numberCardValue, nameValue, dataValue, cvcValue } = this.state;
    const { success, isFetching } = this.props;
    return (
      <Profile.Container>
        {success ? (
          <ProfileComplited />
        ) : (
          <ProfileCard
            changeNumber={this.hendlerChangeNumber}
            changeName={this.hendlerChangeName}
            changeData={this.hendlerChangeData}
            changeCvc={this.hendlerChangeCvc}
            isFetching={isFetching}
            nameValue={nameValue}
            numberCardValue={numberCardValue}
            dataValue={dataValue}
            cvcValue={cvcValue}
            numberValue={this.numberValue}
            submitCard={this.submitCard}
          />
        )}
      </Profile.Container>
    );
  }
}

Profile.Container = styled.div`
  overflow: auto;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    0deg,
    rgba(28, 26, 25, 0.5),
    rgba(28, 26, 25, 0.5)
  );
`;

export const ProfilewithAuth = connect(
  state => ({
    success: selectSuccess(state),
    cardData: selectCardData(state),
    isFetching: selectIsFetching(state)
  }),
  {
    logOut,
    card,
    notpayment
  }
)(Profile);
