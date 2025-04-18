'use client';

import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from '@/app/components/products/ProductItem';
import PageHeader from "@/app/components/PageHeader";

const ProductSameCategory = ({ products }) => {
    return (
        <div className="w-full">

            <PageHeader title={"Similar Products in this Category"}/>

            <Swiper
                spaceBetween={10}
                slidesPerView="auto"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="py-4"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} className="!w-auto">
                        <div className="min-w-[200px] max-w-xs">
                            <ProductItem {...product} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductSameCategory;
