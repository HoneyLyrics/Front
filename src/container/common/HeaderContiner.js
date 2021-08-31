import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../modules/user';
import Header from '../../components/common/Header';

const HeaderContainer = ({ detail }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  const onLogout = () => {
    dispatch(logout());
    console.log('로그아웃 성공');
  };

  return <Header user={user} onLogout={onLogout} detail={detail} />;
};

export default HeaderContainer;
