import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../comman/Button'
import Input from '../comman/Input';
import Component from '../assets/images/Component 3.png';
import Rectangle from '../assets/images/Rectangle 11.png';
import fileIcon from '../assets/sidebar/mi_message.png';
import buildingIcon from '../assets/sidebar/mingcute_notification-line.png';
import clipboardIcon from '../assets/sidebar/circum_calendar.png';
import { FaPlus } from 'react-icons/fa';

const Header: React.FC = () => {
  const navigate = useNavigate(); 

  const handleAddClick = () => {
    navigate('/login'); 
  };

  return (
    <header className="bg-gray-800 text-white flex justify-between items-center p-4">
      <div className="flex items-center space-x-8 m-[10px]">
        <img src={Component} alt="Logo" className="w-[117px] h-auto" />
        <h1 className="text-xl">Contacts</h1>
      </div>

      <div className="flex items-center w-full max-w-md mx-4">
        <Input placeholder="Search lead, contact and more" />
      </div>

      <div className="flex items-center space-x-4">
        <Button
          label={<FaPlus className="text-xl" />}
          onClick={handleAddClick}
          className="w-[28px] h-[28px]"
        />
        <a href="#" className="flex flex-col items-center hover:bg-gray-700 p-2 rounded">
          <img src={fileIcon} alt="File" className="w-5 h-5" />
        </a>
        <a href="#" className="flex flex-col items-center hover:bg-gray-700 p-2 rounded">
          <img src={buildingIcon} alt="Building" className="w-5 h-5" />
        </a>
        <a href="#" className="flex flex-col items-center hover:bg-gray-700 p-2 rounded">
          <img src={clipboardIcon} alt="Clipboard" className="w-5 h-5" />
        </a>
      </div>

      <div className="flex items-center space-x-2 ml-4">
        <img src={Rectangle} alt="User" className="w-[38px] h-[38px] rounded-full" />
        <div className="flex flex-col">
          <span className="text-sm">John Kuy</span>
          <span className="text-xs text-gray-400">CEO, Superadmin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
