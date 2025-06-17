import React from 'react';
import Filters from '../table/Filters';
import Table from '../table/Table';

const MainContent: React.FC = () => {
    return (
        <div className="p-4 text-black">
            <Filters />
            <Table />
        </div>
    );
};

export default MainContent;
