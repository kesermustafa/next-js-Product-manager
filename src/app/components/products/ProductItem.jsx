"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ProductItem = ({ id, title, price, image }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${id}`);
    };

    return (
        <div
            className="cursor-pointer border border-gray-300 max-w-48 h-[350px] rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden bg-white"
            onClick={handleClick}
        >
            <div className="relative h-56 w-full ">
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-4 flex justify-between flex-col">
                <h2 className="text-base truncate h-14 font-semibold text-gray-800">{title}</h2>
                <p className="mt-2 text-end inline-block bg-yellow-400 text-gray-800 text-sm font-medium px-3 py-1 rounded">
                    ${price}
                </p>
            </div>
        </div>
    );
};

export default ProductItem;
