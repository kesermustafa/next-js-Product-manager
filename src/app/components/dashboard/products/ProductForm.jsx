"use client"
import React from 'react';
import SubmitButton from "@/app/components/common/SubmitButton";
import CancelButton from "@/app/components/common/CancelButton";
import {createProductAction, updateProductAction} from "@/app/actions/product-actions";
import {useFormState} from "react-dom";


const ProductForm = ({product, isNewProduct}) => {

    const initialState = {message:null, errors:{}};

    const [state, dispatch] = useFormState(createProductAction, initialState);


    // Eğer yeni bir ürün oluşturuluyorsa boş bir product nesnesi kullan
    const productData = product || {
        id: '',
        title: '',
        description: '',
        price: '',
        category: '',
        image: ''
    };

    const submitTitle = isNewProduct ? "Create Product" : "Update";

    const formAction = isNewProduct ? createProductAction : updateProductAction;

    return (
        <div className={"max-w-[600px] w-full h-full mx-auto"}>
            <form action={formAction} className="space-y-4">
                <input type="hidden" name="id" defaultValue={productData.id}/>

                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        name="title"
                        type="text"
                        defaultValue={productData.title}
                        className={`w-full border rounded-md px-3 py-2 ${
                            productData.error?.title ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {productData.error?.title && (
                        <p className="text-red-500 text-sm mt-1">{productData.error.title}</p>
                    )}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                        name="description"
                        rows={3}
                        defaultValue={productData.description}
                        className={`w-full border rounded-md px-3 py-2 ${
                            productData.error?.description ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {productData.error?.description && (
                        <p className="text-red-500 text-sm mt-1">{productData.error.description}</p>
                    )}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Price</label>
                    <input
                        name="price"
                        type="number"
                        defaultValue={productData.price}
                        className={`w-full border rounded-md px-3 py-2 ${
                            productData.error?.price ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {productData.error?.price && (
                        <p className="text-red-500 text-sm mt-1">{productData.error.price}</p>
                    )}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Category</label>
                    <select
                        name="category"
                        defaultValue={productData.category}
                        className={`w-full border rounded-md px-3 py-2 ${
                            productData.error?.category ? "border-red-500" : "border-gray-300"
                        }`}
                    >
                        <option value="">Select</option>
                        <option value="Home">Home</option>
                        <option value="Computers">Computers</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Kids">Kids</option>
                        <option value="Grocery">Grocery</option>
                    </select>
                    {productData.error?.category && (
                        <p className="text-red-500 text-sm mt-1">{productData.error.category}</p>
                    )}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Image</label>
                    <input
                        name="image"
                        type="text"
                        defaultValue={productData.image}
                        className={`w-full border rounded-md px-3 py-2 ${
                            productData.error?.image ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {productData.error?.image && (
                        <p className="text-red-500 text-sm mt-1">{productData.error.image}</p>
                    )}
                </div>

                <div className="flex items-center gap-4">
                    <SubmitButton title={submitTitle}/>
                    <CancelButton/>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;