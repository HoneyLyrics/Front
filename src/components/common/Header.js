import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import honey from '../../asset/honey.png';
import { logout } from '../../modules/user';

const Header = ({ history }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  const onLogout = () => {
    dispatch(logout());
    console.log('로그아웃 성공');
  };

  return (
    <div className="header">
      <div className="logo" onClick={() => history.push('/')}>
        <img src={honey} alt="logo" />
        <h1>Honey Lyrics</h1>
      </div>
      {user ? (
        <div className="user-info">
          <span>{user.username}님 환영합니다!</span>
          <button onClick={onLogout}>로그아웃</button>
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
