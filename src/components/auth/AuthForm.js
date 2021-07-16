import React from 'react';

const AuthForm = ({ text }) => {
  return (
    <div className="auth-form-container">
      <h3>{text}</h3>
      <form>
        <input />
        <input type="password" />
        {/* <input type="password" /> */}
        <button>R or L</button>
      </form>
      <div className="auth-footer">link to register || login</div>
    </div>
  );
};

export default AuthForm;
