import React from 'react';
import { Link } from 'react-router-dom';

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];

  return (
    <div className="auth-form-container">
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <input
          className="auth-styled-form"
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <input
          className="auth-styled-form"
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <input
            className="auth-styled-form"
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {/* 에러메세지 처리 */}
        <button className="auth-form-btn fullwidth">{text}</button>
      </form>
      <div className="auth-footer">
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
