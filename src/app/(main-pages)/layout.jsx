import React from 'react';
import Header from "@/app/components/header";
import Footer from "@/app/components/common/footer";

const MainLayout = ({children}) => {
    return (
        <>
            <Header/>
            <main className='min-h-screen '>{children}</main>
            <Footer/>
        </>
    );
};

export default MainLayout;
