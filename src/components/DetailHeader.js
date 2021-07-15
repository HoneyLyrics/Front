import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { withRouter } from 'react-router-dom';
import Header from './Header';

const DetailHeader = ({ history }) => {
  return (
    <div className="detail-header">
      <div className="go-back-button" onClick={history.goBack}>
        <BiArrowBack />
      </div>
      <Header />
    </div>
  );
};

export default withRouter(DetailHeader);
