import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = ({ history }) => {
  return (
    <div className="header" onClick={() => history.push('/')}>
      <h1>Honey Lyrics</h1>
      <img
        src="https://cdn-store.leagueoflegends.co.kr/images/v2/emotes/3153.png"
        alt="Happy_Bee"
      />
    </div>
  );
};

export default withRouter(Header);
