import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <AuthForm text="회원가입" />
    </AuthTemplate>
  );
};

export default RegisterPage;
