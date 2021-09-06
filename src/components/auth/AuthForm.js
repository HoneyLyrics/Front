import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthFormContainer = styled.div`
  h3 {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #ffc966;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;

  &:focus {
    border-bottom: 1px solid #ffae19;
  }

  & + & {
    margin-top: 1rem;
  }
`;

const AuthFooter = styled.div`
  margin-top: 2rem;
  text-align: right;

  a {
    color: #ffc459;
    text-decoration: underline;

    &:hover {
      color: orange;
    }
  }
`;

const AuthFormBtn = styled(Button)`
  margin-top: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  width: 100%;
  font-size: 1.125rem;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];

  return (
    <AuthFormContainer>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <AuthFormBtn>{text}</AuthFormBtn>
      </form>
      <AuthFooter>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </AuthFooter>
    </AuthFormContainer>
  );
};

export default AuthForm;
