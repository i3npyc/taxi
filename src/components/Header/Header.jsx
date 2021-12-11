import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../../static/img/logo.svg';
import { Link } from 'react-router-dom';
import { logOut } from '../../auth/actions';
import { useSelector, useDispatch } from 'react-redux';

const Header = ({ navigateTo }) => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const headerLogOut = () => {
    dispatch(logOut());
    navigateTo('login');
  };
  return (
    <Header.Container>
      <Header.Content>
        <Header.Column>
          <Header.Img
            onClick={
              !isLoggedIn
                ? () => navigateTo('login')
                : () => navigateTo('profile')
            }
          ></Header.Img>
        </Header.Column>
        <Header.Column>
          <Header.Nav>
            <Header.List>
              {!isLoggedIn && (
                <Header.ListItem>
                  <Header.Link>
                    <Link to="/login">Логин</Link>
                  </Header.Link>
                </Header.ListItem>
              )}
              <Header.ListItem>
                <Header.Link>
                  <Link to="/profile">Профиль</Link>
                </Header.Link>
              </Header.ListItem>
              <Header.ListItem>
                <Header.Link>
                  <Link to="/">Карта</Link>
                </Header.Link>
              </Header.ListItem>
              {isLoggedIn ? (
                <Header.ListItem>
                  <Header.Link onClick={headerLogOut}>Выйти</Header.Link>
                </Header.ListItem>
              ) : (
                <Header.ListItem>
                  <Header.Link onClick={() => navigateTo('registration')}>
                    Регистрация
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
  cursor: pointer;
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
Header.Link = styled.button`
  font-size: 21px;
  color: #ffffff;
`;

export default Header;
