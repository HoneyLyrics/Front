import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import honey from '../../asset/honey.png';

const Header = ({ history }) => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  // const user = { user: '노현우' };

  return (
    <div className="header">
      <div className="logo" onClick={() => history.push('/')}>
        <img src={honey} alt="logo" />
        <h1>Honey Lyrics</h1>
      </div>
      {user ? (
        <div className="user-info">
          <span>{user.user}님 환영합니다!</span>
          <button>로그아웃</button>
        </div>
      ) : (
        <div className="user-info">
          <button onClick={() => history.push('/login')}>로그인</button>
          <button onClick={() => history.push('/register')}>회원가입</button>
        </div>
      )}
    </div>
  );
};

export default withRouter(Header);
