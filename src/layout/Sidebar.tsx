import React, { useState } from 'react';
import userIcon from '../assets/sidebar/Component 2.png';
import fileIcon from '../assets/sidebar/ic_baseline-perm-contact-calendar.png';
import buildingIcon from '../assets/sidebar/Frame.png';
import clipboardIcon from '../assets/sidebar/Capa_1.png';
import bellIcon from '../assets/sidebar/Layer_1.png';
import helpIcon from '../assets/sidebar/lets-icons_file-dock-duotone.png';
import settingsIcon from '../assets/sidebar/Group 36.png';
import graphIcon from '../assets/sidebar/lsicon_setting-filled.png';
const Sidebar: React.FC = () => {
  const [active, setActive] = useState('file');

  const icons = [
    { id: 'user', src: userIcon, alt: 'User' },
    { id: 'file', src: fileIcon, alt: 'File' },
    { id: 'building', src: buildingIcon, alt: 'Building' },
    { id: 'clipboard', src: clipboardIcon, alt: 'Clipboard' },
    { id: 'bell', src: bellIcon, alt: 'Bell' },
    { id: 'help', src: helpIcon, alt: 'Help' },
  ];

  const bottomIcons = [
    { id: 'settings', src: settingsIcon, alt: 'Settings' },
    { id: 'graph', src: graphIcon, alt: 'Graph' },
  ];

  const renderIcon = ({ id, src, alt }: { id: string; src: string; alt: string }) => (
    <button
      key={id}
      onClick={() => setActive(id)}
      className={`group relative flex flex-col items-center w-full py-2 
        ${active === id ? 'bg-[#e8f2ff] ' : ''}`}
    >
      {active === id && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-orange-500 rounded-r-md"></div>
      )}

      <img
        src={src}
        alt={alt}
        style={
          active === id
            ? {
                filter:
                  'brightness(0) saturate(100%) invert(78%) sepia(64%) saturate(668%) hue-rotate(328deg) brightness(104%) contrast(101%)',
              }
            : {}
        }
        className={`w-6 h-6 transition-all duration-200 ${
          active === id ? '' : 'opacity-60 group-hover:opacity-100'
        }`}
      />

    </button>
  );

  return (
    <nav className="w-[74px] bg-white flex flex-col items-center py-4 border-r">
      <div className="flex flex-col space-y-4 mb-auto w-full">
        {icons.map(renderIcon)}
      </div>

      <div className="flex flex-col space-y-2 mt-auto w-full">
        {bottomIcons.map(renderIcon)}
      </div>
    </nav>
  );
};

export default Sidebar;
