import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { logOut } from '../auth/actions';
import { card, notpayment } from '../card/actions';
import ProfileComplited from '../components/Profile/ProfileComplited';
import ProfileCard from '../components/Profile/ProfileCard';

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
          numberCardValue: this.numberValue(e.target.value)
            ? this.numberValue(e.target.value)
                .match(/.{1,4}/g)
                .join(' ')
            : ''
        });
        break;
      case 'name':
        this.setState({ nameValue: e.target.value });
        break;
      case 'data':
        this.setState({
          dataValue: this.numberValue(e.target.value)
            ? this.numberValue(e.target.value)
                .match(/.{1,2}/g)
                .join('/')
            : ''
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
  changeCard = () => {
    this.props.notpayment();
  };
  numberValue = value => value.replace(/[^\d]/g, '');
  render() {
    const { numberCardValue, nameValue, dataValue, cvcValue } = this.state;
    return (
      <Profile.Container>
        {this.props.success ? (
          <ProfileComplited changeCard={this.changeCard} />
        ) : (
          <ProfileCard
            hendlerChange={this.hendlerChange}
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
  state => ({ success: state.payment.success }),
  {
    logOut,
    card,
    notpayment
  }
)(Profile);
