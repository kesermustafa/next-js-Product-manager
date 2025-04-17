"use client"
import React from 'react';
import Link from "next/link";

const ProductList = ({product, key}) => {
    return (
        <div key={key} className='border flex flex-col justify-between border-gray-600 rounded-md py-4' >
            <div className="flex flex-col gap-2">
                <h2 className='font-bold text-xl text-center text-lime-600'>{product.title}</h2>
                <p>{product.category}</p>
                <img src={product.image} className='w-full h-56 object-cover' alt={product.title} />
                <p className={'flex items-center justify-end w-full font-semibold text-amber-500'}>{product.price} ₺</p>
                <p className='text-justify'>{product.description}</p>
            </div>

            <div className="flex w-full mt-4 px-6 justify-end">
                <Link
                    className='border hover:border-gray-400 border-gray-600 transition hover:text-amber-500 rounded-md py-1 px-3'
                    href={`/products/${product.id}`}>
                    Urune git
                </Link>
            </div>

        </div>
    );
};

export default ProductList;
