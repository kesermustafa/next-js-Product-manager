import React from 'react';
import Image from "next/image";

const ImageResponse = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">

            <Image
                src={"https://picsum.photos/600/300"}
                alt={"image"}
                width={800}
                height={400}
                priority={false}
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <div className="relative w-[100%] h-[400px]">
                <Image
                    src="https://picsum.photos/1200/600"
                    alt="image"
                    fill
                    priority
                    className="object-center object-fill"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 70vw"
                />
            </div>

        </div>
    );
};

export default ImageResponse;
