import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileComplited = () => {
  return (
    <ProfileComplited.Container>
      <ProfileComplited.Title>Профиль</ProfileComplited.Title>
      <ProfileComplited.Label>
        Платёжные данные обновлены. Теперь вы можете заказывать такси.
      </ProfileComplited.Label>
      <ProfileComplited.BlockLink>
        <Link to="/">Перейти на карту</Link>
      </ProfileComplited.BlockLink>
    </ProfileComplited.Container>
  );
};

ProfileComplited.Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 822px;
  height: 345px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
ProfileComplited.Title = styled.div`
  margin: 0px 0px 13px 0px;
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
`;
ProfileComplited.Label = styled.div`
  margin: 0px 0px 28px 0px;
  text-align: center;
  font-size: 18px;
  line-height: 21px;
  color: #7b7b7b;
`;
ProfileComplited.BlockLink = styled.div`
  a {
    height: 61px;
    width: ${({ width = '353px' }) => width};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: #fdbf5a;
    border-radius: 70px;
    font-size: 25px;
    color: #000000;
    text-decoration: none;
  }
`;

export default ProfileComplited;
