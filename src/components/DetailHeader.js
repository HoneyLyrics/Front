import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Header from './Header';
import Searchbar from './Searchbar';

const DetailHeader = () => {
  return (
    <div className="detail-header">
      <div className="go-back-button">
        <BiArrowBack />
      </div>
      <Header />
      <Searchbar />
    </div>
  );
};

export default DetailHeader;
