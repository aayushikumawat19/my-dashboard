import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchInputProps {
  type?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<SearchInputProps> = ({
  type = 'text',
  id,
  label,
  placeholder,
  className,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type={type}
          id={id}
          placeholder={placeholder || 'Search...'}
          className={`rounded-lg pl-10 pr-4 py-2 w-full  focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        />
      </div>
    </div>
  );
};

export default Input;