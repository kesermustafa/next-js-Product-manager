"use client";
import { useRouter } from "next/navigation";
import React from "react";


const CancelButton = ({ title = "Cancel" }) => {
    const router = useRouter();

    return (
        <button type="button" className="flex cursor-pointer items-center font-semibold text-blue-600
        border justify-center py-1 px-3 border-blue-700 rounded flex-1 hover:text-blue-100 hover:bg-blue-700 transition"
                onClick={() => router.back()}>
            {title}
        </button>
    );
};

export default CancelButton;