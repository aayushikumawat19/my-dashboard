import React from 'react';
import Logo from '../assets/login/logo.svg';
import Loginphoto from '../assets/login/Group 165.png';

const AuthImage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white px-4 py-8">
      <img
        src={Logo}
        alt="Logo"
        className="mb-12 mt-12 w-[180px] h-[38px] object-cover "
      />

      <img
        src={Loginphoto}
        alt="Dashboard" 
        className="mb-8 w-[499px] h-[297px] object-cover"
      />

      <div className="w-[417px] h-[89px] text-center">
        <h2 className="text-xl  mb-2">Introducing New Features</h2>
        <p className="text-xs text-white">
          Analyzing previous trends ensure decision that businesses always decision  make the right decision.
          And as the scale of the decision and its impact magnifies...
        </p>
      </div>
    </div>
  );
};

export default AuthImage;