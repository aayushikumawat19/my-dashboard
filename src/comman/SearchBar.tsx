import React from 'react';

const SearchBar: React.FC = () => {
    return (
        <div className="mb-4">
            <input 
                type="text" 
                placeholder="Search lead, contact and more" 
                className="border border-gray-300 rounded-lg w-full p-2"
            />
        </div>
    );
};

export default SearchBar;