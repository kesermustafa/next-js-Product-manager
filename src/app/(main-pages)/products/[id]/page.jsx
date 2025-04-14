import React from 'react';

const ProductDetailPage = async ({params}) => {

   const { id } = await params;

    return (
        <div>
            <div className={'h-[65px]'}></div>

            {id}'Id li urun sayfasi

        </div>
    );
};

export default ProductDetailPage;
