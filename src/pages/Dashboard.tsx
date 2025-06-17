import React from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import MainContent from '../layout/MainContent';

const Dashboard: React.FC = () => {
    return (
        <div className="bg-white min-h-screen max-w-[1514px] m-auto flex flex-col">
            <Header />

            <div className="flex flex-1">
                <Sidebar />

                <main className="flex-1 h-[calc(100vh-70px)] overflow-y-auto bg-gray-50 p-4">
                    <MainContent />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;