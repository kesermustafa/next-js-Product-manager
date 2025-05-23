import React from 'react';

import ProductList from "@/app/components/dashboard/products/ProductList";
import ProductHeader from "@/app/components/dashboard/products/ProductHeader";
import {appConfig} from "@/app/utils/config";


const DashboardProductsPage = async () => {
    let products = [];

    try {
        const res = await fetch(`${appConfig.apiURL}/products`, { cache: 'no-store' });



        products = await res.json();

        if (!Array.isArray(products) || products.length === 0) {
            // Dizi değilse ya da boşsa
            return (
                <div className="text-center py-10">
                    <h2 className="text-xl font-semibold">Hiç ürün bulunamadı.</h2>
                </div>
            );
        }

    } catch (error) {
        console.error("Veri çekme hatası:", error.message);
        return (
            <div className="text-center py-10 text-red-500">
                <h2 className="text-xl font-semibold">Ürünler yüklenirken bir hata oluştu.</h2>
                <p>{error.message}</p>
            </div>
        );
    }

    return (
        <div className="p-6">

            <ProductHeader/>


            <ProductList products={products} />
        </div>
    );
};

export default DashboardProductsPage;
