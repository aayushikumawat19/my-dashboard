import React, { useState } from 'react';
import filterIcon from '../assets/images/cil_filter.png';
import columnIcon from '../assets/images/Frame (1).png';
import fileIcon from '../assets/sidebar/mingcute_notification-line.png';
import buildingIcon from '../assets/images/Frame (3).png';
import { FaAngleDown } from 'react-icons/fa';

const Filters: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Contact');
    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

    const handleAddClick = () => {
        console.log('Add clicked');
    };

    const tabs = ['Leads', 'Contact', 'Company', 'Lead Capture'];

    return (
        <div className="p-4">
            <div className="flex space-x-8 mb-14 mt-[-20px] text-sm">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`text-gray-600 pb-1 ${
                            activeTab === tab
                                ? 'font-bold border-b-2 border-orange-500'
                                : ''
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <h2 className="text-3xl mb-4">567 Contacts</h2>

            <div className="flex justify-between items-center mb-4 text-sm">
                <div className="flex space-x-4">
                    <select className="p-2">
                        <option>Contact Option</option>
                        <option>Another Option</option>
                    </select>
                    <select className="p-2">
                        <option>Contact Owner</option>
                        <option>Another Option</option>
                    </select>
                    <button className="px-4 py-2 flex items-center space-x-2">
                        <img src={filterIcon} alt="Filter" className="w-4 h-4" />
                        <span>More Filter</span>
                    </button>
                </div>

                <div className="flex items-center space-x-4">
                    <button className="text-black px-4 py-2 rounded flex items-center space-x-2">
                        <img src={columnIcon} alt="Column" className="w-4 h-4" />
                        <span>Manage Column</span>
                    </button>
                                
                <div className="flex items-center bg-[#F5F5F5] rounded-lg overflow-hidden shadow-inner">
                    <button
                        className={`p-2 ${viewMode === 'list' ? 'bg-white shadow-md rounded-l-lg' : ''}`}
                        onClick={() => setViewMode('list')}
                    >
                        <img src={fileIcon} alt="List View" className="w-5 h-5" />
                    </button>
                    <button
                        className={`p-2 ${viewMode === 'grid' ? 'bg-white shadow-md rounded-r-lg' : ''}`}
                        onClick={() => setViewMode('grid')}
                    >
                        <img src={buildingIcon} alt="Grid View" className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex items-center space-x-2">
                    <button className="px-4 py-2 rounded">Export</button>
                    <button
                        className="bg-orange-500 text-white px-4 py-2 rounded flex items-center space-x-2"
                        onClick={handleAddClick}
                    >
                        <span>Create Contact</span>
                        <FaAngleDown className="text-sm" />
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;