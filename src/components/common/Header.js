import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import honey from '../../asset/honey.png';
import Button from './Button';
import Responsive from './Responsive';

const HeaderBlock = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background: white;
  font-family: 'Noto Serif', serif;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  position: relative;
`;

const Logo = styled(Link)`
  display: flex;
  position: absolute;
  width: 39%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -36%);
  cursor: pointer;
  font-size: 2.75rem;

  img {
    width: 3.5rem;
    object-fit: contain;
    margin-top: 0.5rem;
  }

  p {
    margin-left: 1.2rem;
  }

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    font-size: 6.4vw;
    width: 75vw;
    position: static;
    margin: 0 auto;
    margin-top: 1rem;
    transform: none;

    img {
      width: 6vw;
    }

    p {
      margin-left: 1vh;
    }
  }
`;

const UserInfo = styled.div`
  position: absolute;
  top: 90%;
  right: 0;
  font-size: 1rem;
  font-family: auto;

  #username {
    font-size: 1.125rem;
    font-weight: bold;
  }

  #sir {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const UserInfoMobile = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Header = ({ user, onLogout }) => {
  return (
    <HeaderBlock>
      <Wrapper>
        <Logo to="/">
          <img src={honey} alt="logo" />
          <p>Honey Lyrics</p>
        </Logo>
        <UserInfo>
          {user ? (
            <>
              <span id="username">{user.username}</span>
              <span id="sir">님</span>
              <Button onClick={onLogout}>로그아웃</Button>
            </>
          ) : (
            <>
              <Button to="/login">로그인</Button>
              <Button to="/register">회원가입</Button>
            </>
          )}
        </UserInfo>
        <UserInfoMobile>
          {user ? (
            <>
              <Button onClick={onLogout}>로그아웃</Button>
            </>
          ) : (
            <>
              <Button to="/login">로그인</Button>
            </>
          )}
        </UserInfoMobile>
      </Wrapper>
    </HeaderBlock>
  );
};

export default Header;
