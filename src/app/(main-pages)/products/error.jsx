'use client'

import { useEffect } from 'react'
import Spacer from "@/app/components/common/Spacer";

export default function Error({ error, reset }) {
    useEffect(() => {

        console.error(error)
    }, [error])

    return (
        <div className='flex flex-col items-center justify-center h-screen w-full '>

            <Spacer/>
            <h2>Something went wrong!</h2>

            <p className='text-red-600'>
                {error.message.includes('not found')
                    ? "Ürün bulunamadı, lütfen geçerli bir ürün seçin."
                    : error.message}
            </p>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}