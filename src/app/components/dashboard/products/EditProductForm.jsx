"use client";
//import { updateProductAction } from "@/actions/product-actions";

import SubmitButton from "@/app/components/common/SubmitButton";
import CancelButton from "@/app/components/common/CancelButton";
import {updateProductAction} from "@/app/actions/product-actions";
import {useActionState} from "react";


const EditProductForm = ({ product }) => {

    const initialState = { message: null, errors: {} };

    const [state, dispatch] = useActionState(updateProductAction, initialState);

    const { title, description, price, category, image } = state.errors;

    return (
        <div className={"max-w-[600px] w-full h-full mx-auto"}>
            {state.errors.common && (
                <div className="bg-red-100 text-red-700 p-3 mb-4 rounded-md">
                    {state.errors.common}
                </div>
            )}

            <form action={dispatch} className="space-y-4">
                <input type="hidden" name="id" defaultValue={product.id} />

                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        name="title"
                        type="text"
                        defaultValue={product.title}
                        className={`w-full border rounded-md px-3 py-2 ${
                            title ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {title && <p className="text-red-500 text-sm mt-1">{title}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                        name="description"
                        rows={3}
                        defaultValue={product.description}
                        className={`w-full border rounded-md px-3 py-2 ${
                            description ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {description && (
                        <p className="text-red-500 text-sm mt-1">{description}</p>
                    )}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Price</label>
                    <input
                        name="price"
                        type="number"
                        step="0.01"
                        defaultValue={product.price}
                        className={`w-full border rounded-md px-3 py-2 ${
                            price ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {price && <p className="text-red-500 text-sm mt-1">{price}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Category</label>
                    <select
                        name="category"
                        defaultValue={product.category}
                        className={`w-full border rounded-md px-3 py-2 ${
                            category ? "border-red-500" : "border-gray-300"
                        }`}
                    >
                        <option value="" disabled={true}>Select</option>
                        <option value="Home">Home</option>
                        <option value="Computers">Computers</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Kids">Kids</option>
                        <option value="Grocery">Grocery</option>
                    </select>
                    {category && (
                        <p className="text-red-500 text-sm mt-1">{category}</p>
                    )}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Image</label>
                    <input
                        name="image"
                        type="text"
                        defaultValue={product.image}
                        className={`w-full border rounded-md px-3 py-2 ${
                            image ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {image && <p className="text-red-500 text-sm mt-1">{image}</p>}
                </div>

                <div className="flex items-center gap-4">
                    <SubmitButton title="Update" />
                    <CancelButton />
                </div>
            </form>
        </div>
    );
};

export default EditProductForm;
