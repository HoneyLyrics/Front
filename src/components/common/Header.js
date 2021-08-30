import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
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
  width: 476px;
  margin: 0 auto;
  display: flex;
  cursor: pointer;
  font-size: 3.75rem;

  img {
    width: 3.5rem;
    object-fit: contain;
    margin-top: 0.5rem;
  }

  p {
    margin-left: 1.2rem;
  }

  @media (max-width: 1024px) {
    margin-top: 0.75rem;
    width: 410px;
    font-size: 3.125rem;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 369px;
    font-size: 2.75rem;
  }

  @media (max-width: 512px) {
    margin-top: 1rem;
    width: 271px;
    font-size: 2.125rem;

    img {
      width: 2.25rem;
      margin-top: 0.5rem;
    }

    p {
      margin-left: 0.5rem;
    }
  }

  @media (max-width: 376px) {
    margin-top: 1.25rem;
    width: 237px;
    font-size: 1.875rem;

    img {
      width: 2rem;
      margin-top: 0.25rem;
    }

    p {
      margin-left: 0.25rem;
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
  top: 90%;
  right: calc((100% - 2rem) / 10);

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 515px) {
    top: 75%;
    a {
      font-size: 0.875rem;
      padding: 0.375rem 0.4375rem;
    }
  }
`;

const GoBackBtn = styled.div`
  position: absolute;
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
    margin: 1vw;
  }

  @media (max-width: 512px) {
    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 376px) {
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const HeaderBtn = styled(Button)`
  background: none;
  color: black;

  &:hover {
    text-decoration: underline;
    background: none;
  }
`;

const Header = ({ user, onLogout, detail }) => {
  const history = useHistory();
  return (
    <HeaderBlock>
      {detail && (
        <GoBackBtn onClick={history.goBack}>
          <BiArrowBack />
        </GoBackBtn>
      )}
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
              <HeaderBtn onClick={onLogout}>로그아웃</HeaderBtn>
            </>
          ) : (
            <>
              <HeaderBtn to="/login">로그인</HeaderBtn>
              <HeaderBtn to="/register">회원가입</HeaderBtn>
            </>
          )}
        </UserInfo>
        <UserInfoMobile>
          {user ? (
            <>
              <Button onClick={onLogout}>❌</Button>
            </>
          ) : (
            <>
              <Button to="/login">🔐</Button>
            </>
          )}
        </UserInfoMobile>
      </Wrapper>
    </HeaderBlock>
  );
};

export default Header;
