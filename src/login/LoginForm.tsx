import React, { useState, useEffect } from 'react';
import Button from '../comman/Button';
import Input from '../comman/FormField';
import Loginphoto from '../assets/login/clarity_email-line (1).svg';
import lock from '../assets/login/si_lock-line.svg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    const newErrors: { email?: string; password?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      alert('Login successful!');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[500px] max-w-md bg-white p-8 ">
        <h1 className="text-3xl text-black mb-1 font-bold">Welcome Back!!</h1>
        <p className="text-black mb-8 text-xs">
          View all the analytics and grow your business from <br /> anywhere!
        </p>

        <form className="flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={Loginphoto}
            placeholder="Enter your email"
            error={errors.email}
          />

          <div className="relative w-full">
            <Input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              icon={lock}
              error={errors.password}
            />
            {showPassword ? (
              <FaEye
                className={`absolute right-4 ${errors.password ? 'top-3' : 'top-1/2'} ${errors.password ? '' : '-translate-y-1/2'} text-gray-400 cursor-pointer text-xl`}
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaEyeSlash
                className={`absolute right-4 ${errors.password ? 'top-3' : 'top-1/2'} ${errors.password ? '' : '-translate-y-1/2'} text-gray-400 cursor-pointer text-xl`}
                onClick={togglePasswordVisibility}
              />
            )}
          </div>

          <div className="flex items-center self-start">
            <input
              type="checkbox"
              id="stayLoggedIn"
              className="form-checkbox h-3 w-3 text-orange-500 border-gray-300 accent-orange-500"
            />
            <label htmlFor="stayLoggedIn" className="ml-2 text-gray-700 text-xs">
              Stay Logged in
            </label>
          </div>

          <Button
            label="LOGIN"
            onClick={handleLogin}
            className="w-full py-3 bg-orange-500 rounded-full text-white transition-colors"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;