import React from 'react';
import { withRouter } from 'react-router-dom';
import honey from '../../asset/honey.png';

const Header = ({ history }) => {
  return (
    <div className="header" onClick={() => history.push('/')}>
      <img src={honey} alt="logo" />
      <h1>Honey Lyrics</h1>
    </div>
  );
};

export default withRouter(Header);
