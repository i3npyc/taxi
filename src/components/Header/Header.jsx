import React from 'react';
import styled from 'styled-components';
import logo from '../../static/img/logo.svg';

const Header = ({ navigateTo }) => {
  return (
    <Header.Container>
      <Header.Content>
        <Header.Column>
          <Header.Img></Header.Img>
        </Header.Column>
        <Header.Column>
          <Header.Nav>
            <Header.List>
              <Header.ListItem>
                <Header.Link onClick={() => navigateTo('login')}>
                  Логин
                </Header.Link>
              </Header.ListItem>
              <Header.ListItem>
                <Header.Link onClick={() => navigateTo('profile')}>
                  Профиль
                </Header.Link>
              </Header.ListItem>
              <Header.ListItem>
                <Header.Link onClick={() => navigateTo('map')}>
                  Карта
                </Header.Link>
              </Header.ListItem>
              <Header.ListItem>
                <Header.Link onClick={() => navigateTo('registration')}>
                  Регистрация
                </Header.Link>
              </Header.ListItem>
            </Header.List>
          </Header.Nav>
        </Header.Column>
      </Header.Content>
    </Header.Container>
  );
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
Header.Link = styled.button`
  font-size: 21px;
  color: #ffffff;
`;

export default Header;
