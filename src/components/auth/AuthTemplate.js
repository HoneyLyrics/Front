import React from 'react';
import { Link } from 'react-router-dom';

const AuthTemplate = ({ children }) => {
  return (
    <div className="auth-template-container">
      <div className="white-box">
        <div className="logo-area">
          <Link to="/">Honey Lyrics</Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;
