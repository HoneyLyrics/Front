import React from 'react';
import Footer from '../components/common/Footer';
import MyInfos from '../components/myinfo/MyInfos';
import HeaderContainer from '../container/common/HeaderContiner';

const MyInfoPage = () => {
  return (
    <>
      <HeaderContainer />
      <MyInfos />
      <Footer />
    </>
  );
};

export default MyInfoPage;
