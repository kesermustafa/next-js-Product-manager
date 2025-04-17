"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Örnek görseller
const imageData = [
    { id: 1, url: "/images/slider-01.jpg" },
    { id: 2, url: "/images/slider-02.jpg" },
];

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleIndicatorClick = (index) => {
        setActiveIndex(index);
    };

    const handlePrev = () => {
        setActiveIndex((prev) =>
            prev === 0 ? imageData.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((prev) =>
            prev === imageData.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="relative w-full" data-carousel="slide">
            <div className="relative h-72 sm:h-96 md:h-[450px] overflow-hidden lg:h-[600px]">
                {imageData.map((image, index) => (
                    <div
                        key={image.id}
                        className={`absolute top-0 left-0 w-full h-full transition-transform duration-900 ease-in-out ${
                            index === activeIndex
                                ? "translate-x-0 z-10 opacity-100"
                                : "translate-x-full z-10 opacity-0"
                        }`}
                    >
                        <Image
                            src={image.url}
                            alt={`Slide ${index + 1}`}
                            priority={true}
                            fill
                            className="block w-full h-full object-center object-fill"
                        />
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {imageData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleIndicatorClick(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === activeIndex
                                ? "bg-white"
                                : "bg-white/50 hover:bg-white"
                        }`}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Prev Button */}
            <button
                onClick={handlePrev}
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
            >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 6 10"
          >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
            </button>

            {/* Next Button */}
            <button
                onClick={handleNext}
                type="button"
                className="absolute top-0 end-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group"
            >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 6 10"
          >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
            </button>
        </div>
    );
};

export default Slider;
