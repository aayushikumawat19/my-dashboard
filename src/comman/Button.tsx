import React from 'react';

interface ButtonProps {
  label: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset'; 
  color?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  color = 'bg-orange-500',
  className = '',
}) => {
  return (
    <button
      type={type} 
      className={`${color} text-white p-2 rounded-full flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
