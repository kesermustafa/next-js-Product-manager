import React from 'react';

const DashboardProductDetailPage = async ({params}) => {

    const { id } = await params;

    console.log(id);
    return (
        <div>

            {id + "Page"}
        </div>
    );
};

export default DashboardProductDetailPage;
