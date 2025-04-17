import React from 'react';
import ClientComp from "@/app/(main-pages)/test/ClientComp";
import ServerComp from "@/app/(main-pages)/test/ServerComp";

const TestPage = () => {
    return (
        <div>
            <div className={'h-24'}></div>
            <ClientComp>
                <ServerComp />
            </ClientComp>
        </div>
    );
};

export default TestPage;
