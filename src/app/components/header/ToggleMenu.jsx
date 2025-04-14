"use client"

import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenuFold} from "react-icons/ai";
import menuItems from "@/app/components/header/menu.json";
import Link from "next/link";

const ToggleMenu = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>

            {/* Mobile menu button */}
            <div className="cursor-pointer relative z-50 sm:hidden" onClick={toggleMenu}>
                {menuOpen ? <AiOutlineClose size={28}/> : <AiOutlineMenuFold size={28}/>}
            </div>

            {menuOpen && (
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40 z-10"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Offcanvas menu */}
            <div
                className={`fixed sm:hidden top-0 right-0 h-full w-52 bg-black shadow-lg transform transition-transform duration-300 z-40 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>

                <div className="p-4 flex flex-col gap-6 mt-8">
                    {
                        menuItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.url}
                                onClick={() => setMenuOpen(false)}
                                className="font-semibold text-gray-200 hover:text-amber-500"
                            >
                                {item.title}
                            </Link>
                        ))
                    }
                    <Link href="/dashboard" onClick={() => setMenuOpen(false)}
                          className="font-semibold text-gray-200 hover:text-amber-500">Dashboard</Link>


                </div>
            </div>
        </div>
    );
};

export default ToggleMenu;
