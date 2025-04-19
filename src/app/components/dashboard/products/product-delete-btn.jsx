"use client"
import React from 'react';
import {appConfig} from "@/app/utils/config";
import {deleteProductAction} from "@/app/actions/product-actions";

const ProductDeleteButton =  ({id}) => {

    const handleDelete = async () => {

        const resp = confirm("Are you sure you want to delete this product?");

        if (!resp) return false;


        try {

            const response = await deleteProductAction(id);
            if(response.errors.common){
                alert(response.errors.common)
            }

       /* const response = await fetch(`${appConfig.apiURL}/products/${id}`, {
                method: 'DELETE'
            });*/

            if (response.ok) {
                alert("Product deleted successfully!");
            } else {
                alert("Failed to delete the product.");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
            alert("An error occurred while deleting the product.");
        }

    }

    return (
        <button className="flex-1 cursor-pointer sm:flex-none px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                onClick={handleDelete}
        >
            Delete
        </button>
    );
};

export default ProductDeleteButton;
