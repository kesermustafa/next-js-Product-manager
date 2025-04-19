import React from 'react';
import {appConfig} from "@/app/utils/config";
import {notFound} from "next/navigation";
import ProductForm from "@/app/components/dashboard/products/ProductForm";
import EditProductForm from "@/app/components/dashboard/products/EditProductForm";
import NewProductForm from "@/app/components/dashboard/products/NewProductForm";

const DashboardProductDetailPage = async ({params}) => {
    const { id } = await params;
    const isNewProduct = id === "new";

    let product = null;

    if (!isNewProduct) {
        try {
            const res = await fetch(`${appConfig.apiURL}/products/${id}`);

            if (!res.ok) {
                return notFound();
            }

            product = await res.json();

            if (!product || Object.keys(product).length === 0) {
                return notFound();
            }
        } catch (error) {
            console.error("Error fetching product:", error);
            return notFound();
        }
    }

    return (
        <div className='min-h-[calc(100vh-65px)] gap-4 flex flex-col items-center justify-center'>
            <h2 className='text-xl font-semibold text-center'>
                {!isNewProduct ? "Update to Product" : "Add to New Product"}
            </h2>

          {/*  <ProductForm
                product={product}
                isNewProduct={isNewProduct}
            />*/}
            <div className='w-full'>
                {isNewProduct ?
                    <NewProductForm product={product} /> :
                    <EditProductForm product={product} />
                }
            </div>
        </div>
    );
};

export default DashboardProductDetailPage;