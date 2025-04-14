import React from 'react';

const page = async ({params}) => {

    const {slug} = await params;

    return (
        <div>
            <div className={'h-[65px]'}></div>
            {slug.map((item)=> <div>{item} path</div>)}
        </div>
    );
};

export default page;
