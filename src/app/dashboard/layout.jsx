import React from 'react';
import DashboardHeader from "@/app/components/dashboard/header";

const DashboardLayout = ({children}) => {
    return (
        <div className=''>
            <DashboardHeader />
            {children}
        </div>
    );
};

export default DashboardLayout;
