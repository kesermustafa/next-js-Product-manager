import React from 'react';
import {appConfig} from "@/app/utils/config";
import {notFound} from "next/navigation";
import ProductForm from "@/app/components/dashboard/products/ProductForm";

const DashboardProductDetailPage = async ({params}) => {

    const { id } = await params;

    console.log(id)

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
                {
                    !isNewProduct ? "Update to Product" :  "Add to New Product"
                }
            </h2>

            <ProductForm
                product={product}
                isNewProduct={isNewProduct}
            />

        {/*    {
                !isNewProduct ? `<EditProductForm product={product} /> : <NewProductForm product={product} />
            }*/}

        </div>
    );
};

export default DashboardProductDetailPage;
