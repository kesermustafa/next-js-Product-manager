import React from 'react';
import {notFound, redirect} from "next/navigation";
import {appConfig} from "@/app/utils/config";

export async function generateMetadata({ params }) {

    const { id } = await params;

    return {
        title: `${id}'li urun`,
        description: "Generated by create next app",
    }
}

const ProductDetailPage = async ({params}) => {

   const { id } = await params;

   if (!id ) {
       throw new Error(`Product with id ${id} not found.`);
   }

   const res = await fetch(`${appConfig.apiURL}/products/${id}`, );
    if (!res.ok) {
        // API 404 dönerse burada yakalanır
        notFound();
    }

    const product = await res.json();

    if (!product || Object.keys(product).length === 0) {
        // API boş ürün döndürürse
        notFound();
    }


    console.log(product);
/*   if (!id) return null;
   if (id === "21") notFound();
   if (id === "22") redirect("/products");*/


    return (
        <div className='!h-[calc(100vh-52px)]'>

            <div className='flex flex-col gap-4 lg:flex-row !h-[calc(100vh-52px)] items-center justify-center'>
                <div className='md:flex-1  w-full'>
                    <img src={product.image} alt={product.title} className='w-full  max-lg:max-h-[350px] object-cover'/>
                </div>
                <div className='md:flex-1 w-full flex flex-col gap-4 '>

                    <div className='flex lg:flex-col justify-between w-full'>
                        <div className='flex flex-col justify-between'>
                            <h2 className='font-bold'>{product.title}</h2>
                            <h3 className='font-semibold'>{product.category}</h3>
                        </div>


                        <p className='font-semibold text-amber-500'>{product?.price}</p>
                    </div>

                    <p>{product.description}</p>

                </div>
            </div>

        </div>
    );
};

export default ProductDetailPage;
