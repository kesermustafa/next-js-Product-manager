import React from 'react';
import DashboardHeader from "@/app/components/dashboard/header";

const DashboardLayout = ({children}) => {
    return (
        <div className='min-h-screen'>
            <DashboardHeader />
            {children}
        </div>
    );
};

export default DashboardLayout;
