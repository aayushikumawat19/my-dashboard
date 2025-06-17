import React, { type InputHTMLAttributes } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: string; 
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  icon,
  error,
  className,
  ...props
}) => {
  return (
     <div className="w-full">
      <div className="relative w-full">
        {icon && (
          <img
            src={icon}
            alt="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        )}
        <input
          {...props}
          className={`w-full py-3 ${icon ? 'pl-12' : 'pl-4'} pr-4 rounded-full bg-white text-black border 
            ${error ? 'border-red-500' : 'border-gray-300'} 
            focus:outline-none focus:ring-1 
            ${error ? 'focus:ring-red-500' : 'focus:ring-orange-500'}`}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>}
    </div>
  );
};

export default FormField;