"use client";
import React, { useState } from "react";
import { useActionState } from "react";
import SubmitButton from "@/app/components/common/SubmitButton";
import CancelButton from "@/app/components/common/CancelButton";
import { createProductAction } from "@/app/actions/product-actions";
import { MdErrorOutline } from "react-icons/md";

const NewProductForm = () => {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useActionState(createProductAction, initialState);

    // Local state to preserve user input
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
        image: "",
    });

    // On input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const { title, description, price, category, image } = state.errors;

    return (
        <div className="max-w-[600px] w-full h-full mx-auto">
            {state.errors.common && (
                <div className="alert alert-danger">{state.errors.common}</div>
            )}

            <form action={dispatch} className="space-y-4">
                <input type="hidden" name="id" />

                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        name="title"
                        type="text"
                        value={formData.title}
                        onChange={handleChange}
                        className={`w-full border rounded-md px-3 py-2 ${title ? "border-red-500" : "border"}`}
                    />
                    {title && (
                        <p className="text-red-400 text-sm font-semibold flex gap-1 items-center">
                            <MdErrorOutline size={20} />
                            {title}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                        name="description"
                        rows={3}
                        value={formData.description}
                        onChange={handleChange}
                        className={`w-full border rounded-md px-3 py-2 ${description ? "border-red-500" : "border"}`}
                    />
                    {description && <p className="text-red-500 text-sm font-semibold">! {description}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Price</label>
                    <input
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        className={`w-full border rounded-md px-3 py-2 ${price ? "border-red-500" : "border"}`}
                    />
                    {price && <p className="text-red-500 text-sm font-semibold">! {price}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className={`w-full border rounded-md px-3 py-2 ${category ? "border-red-500" : "border"}`}
                    >
                        <option value="" disabled>Select</option>
                        <option value="Home">Home</option>
                        <option value="Computers">Computers</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Kids">Kids</option>
                        <option value="Grocery">Grocery</option>
                    </select>
                    {category && <p className="text-red-500 text-sm font-semibold">! {category}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Image</label>
                    <input
                        name="image"
                        type="text"
                        value={formData.image}
                        onChange={handleChange}
                        className={`w-full border rounded-md px-3 py-2 ${image ? "border-red-500" : "border"}`}
                    />
                    {image && <p className="text-red-500 text-sm font-semibold">! {image}</p>}
                </div>

                {/* Hidden inputs for actual submission */}
                {Object.entries(formData).map(([key, value]) => (
                    <input key={key} type="hidden" name={key} value={value} />
                ))}

                <div className="flex items-center gap-4">
                    <SubmitButton title="Create Product" />
                    <CancelButton />
                </div>
            </form>
        </div>
    );
};

export default NewProductForm;
