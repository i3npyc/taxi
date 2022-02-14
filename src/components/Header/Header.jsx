import React from 'react';

import propTypes from 'prop-types';

import { Navigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { logOut } from '../../modules/auth/actions';

import logo from '../../static/img/logo.svg';
import styled from 'styled-components';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const headerLogOut = () => {
    localStorage.removeItem('access_token');
    dispatch(logOut());
  };
  return (
    <Header.Container>
      <Header.Content>
        <Header.Column>
          <Header.Img
            onClick={
              !isLoggedIn
                ? () => <Navigate to="/login" />
                : () => <Navigate to="/" />
            }
          ></Header.Img>
        </Header.Column>
        <Header.Column>
          <Header.Nav>
            <Header.List>
              {!isLoggedIn && (
                <Header.ListItem>
                  <Header.Link>
                    <CustomLink to="/login">Логин</CustomLink>
                  </Header.Link>
                </Header.ListItem>
              )}
              <Header.ListItem>
                <Header.Link>
                  <CustomLink to="/profile">Профиль</CustomLink>
                </Header.Link>
              </Header.ListItem>
              <Header.ListItem>
                <Header.Link>
                  <CustomLink to="/">Карта</CustomLink>
                </Header.Link>
              </Header.ListItem>
              {isLoggedIn ? (
                <Header.ListItem>
                  <Header.Link onClick={headerLogOut}>Выйти</Header.Link>
                </Header.ListItem>
              ) : (
                <Header.ListItem>
                  <Header.Link>
                    <CustomLink to="/registration">Регистрация</CustomLink>
                  </Header.Link>
                </Header.ListItem>
              )}
            </Header.List>
          </Header.Nav>
        </Header.Column>
      </Header.Content>
    </Header.Container>
  );
};

Header.propTypes = {
  navigateTo: propTypes.func
};

Header.Container = styled.header`
  background: #1c1a19;
`;

Header.Content = styled.div`
  padding: 0px 50px 0px 27px;
  height: 102px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
Header.Column = styled.div``;
Header.Img = styled.div`
  width: 270px;
  height: 61px;
  background: url(${logo}) no-repeat;
`;
Header.Nav = styled.nav``;
Header.List = styled.ul`
  display: flex;
`;
Header.ListItem = styled.li`
  margin: 0px 25px 0px 0px;
  &:last-child {
    margin: 0px;
  }
`;
Header.Link = styled.div`
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  a {
    text-decoration: none;
    font-size: inherit;
    color: inherit;
  }
`;

export default Header;
