import Image from "next/image";
import React from "react";
import image from "../../public/images/404.jpg";

const NotFound = () => {
    return (
        <div className="flex flex-col w-full h-[100vh] items-center justify-center text-center">
            <div className="flex justify-center items-center w-full h-[90vh]">
                <Image
                    src={image}
                    alt="Not found"
                    width={800}
                    height={800}
                    className="object-cover"
                />
            </div>
            <div className="mt-4">
                <h2 className="text-2xl font-bold">Not Found</h2>
                <p className="text-gray-600">The page you requested was not found...</p>
            </div>
        </div>
    );
};

export default NotFound;
