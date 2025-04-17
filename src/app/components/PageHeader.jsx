import React from 'react';

const PageHeader = ({title}) => {
    return (
        <div className='flex justify-center items-center w-full h-16 '>
            <h1 className={`font-bold text-xl text-amber-500 text-center}`}>
                {title}
            </h1>

        </div>
    );
};

export default PageHeader;
