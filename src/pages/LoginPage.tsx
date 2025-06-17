import React from 'react';
import AuthImage from '../login/AuthImage';
import LoginForm from '../login/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-white">
      <div className="w-[746px] bg-black items-center ">
        <AuthImage />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center">
          <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
