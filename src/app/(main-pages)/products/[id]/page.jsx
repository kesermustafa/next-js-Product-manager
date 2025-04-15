import React from 'react';
import {notFound, redirect} from "next/navigation";

const ProductDetailPage = async ({params}) => {

   const { id } = await params;

/*   if (!id) return null;
   if (id === "21") notFound();
   if (id === "22") redirect("/products");*/


    return (
        <div>
            <div className={'h-[65px]'}></div>

            {id}'Id li urun sayfasi

        </div>
    );
};

export default ProductDetailPage;
