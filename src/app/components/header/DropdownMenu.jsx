'use client';
import Link from 'next/link';
import {useState} from 'react';

export default function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">

            <div
                className="flex justify-center px-4 py-1 rounded-md cursor-pointer hover:text-amber-500"
                onClick={toggleDropdown}
            >
                Dashboard
            </div>


            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={closeDropdown}
                    />

                    <div
                        className="absolute right-0 z-20 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                        <div className="py-1">
                            <Link
                                href="/dashboard"
                                className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                onClick={closeDropdown}
                            >
                                Dashboard Page
                            </Link>
                            <Link
                                href="/dashboard/products"
                                className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                onClick={closeDropdown}
                            >
                                Products
                            </Link>
                            <Link
                                href="/dashboard/profile"
                                className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                onClick={closeDropdown}
                            >
                                Profile
                            </Link>
                            <Link
                                href="/dashboard/logout"
                                className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                onClick={closeDropdown}
                            >
                                Logout
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}