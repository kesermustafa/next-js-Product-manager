import React from 'react';

const SubmitButton = ({title}) => {
    return (
        <div className="flex items-center cursor-pointer
         text-green-700 font-semibold border justify-center py-1 px-3
          border-green-700 rounded flex-1 hover:text-green-100 hover:bg-green-700 transition">
            <button className='cursor-pointer' type={'submit'}>{title}</button>
        </div>
    );
};

export default SubmitButton;
