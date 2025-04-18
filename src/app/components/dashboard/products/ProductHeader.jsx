import React from 'react';
import Link from "next/link";

const ProductHeader = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='font-semibold text-2xl'>Products</h2>

            <div className='flex items-center w-full justify-end my-4'>
                <Link
                    className='font-semibold border border-green-800 text-green-700 py-2 px-6 rounded-lg'
                    href={"/dashboard/products/new"}>
                    Add to New Product
                </Link>
            </div>

        </div>
    );
};

export default ProductHeader;
