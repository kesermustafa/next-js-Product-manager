"use client"

import React from 'react';
import menuItems from "@/app/components/header/menu.json";
import Link from "next/link";
import {usePathname} from "next/navigation";

const MenuBar = () => {

    const pathname = usePathname();

    return (

        <div className="hidden sm:flex gap-4 sm:gap-8 md:gap-10 items-center">
            {menuItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                    <Link
                        key={item.id}
                        href={item.url}
                        className={`font-semibold transition hover:text-amber-500 hover:border-b hover:border-b-amber-500 ${isActive ? 'text-amber-500 border-b border-b-amber-500' : ''}`}
                    >
                        {item.title}
                    </Link>
                )
            })}
        </div>

    );
};

export default MenuBar;
