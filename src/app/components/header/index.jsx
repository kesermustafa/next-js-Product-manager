import React from 'react';
import DarkModeButton from "@/app/components/header/darkModeButton";
import menuItems from "./menu.json"
import Link from "next/link";
import ToggleMenu from "@/app/components/header/ToggleMenu";
import MenuBar from "@/app/components/header/MenuBar";

const Navbar = () => {

    return (
        <>
            <div className='fixed top-0 right-0 left-0 flex justify-between border-b border-b-gray-200 p-2 items-center z-20'>
                <Link href={"/"} className="font-semibold whitespace-nowrap text-amber-600 text-xl">Products Manager</Link>

         {/*       <div className="hidden sm:flex gap-4 sm:gap-8 md:gap-10 items-center">
                    {
                        menuItems.map((item) => (
                            <Link
                                className='font-semibold hover:text-amber-500 hover:border-b transition hover:border-b-amber-500'
                                href={item.url}
                                key={item.id}>
                                {item.title}
                            </Link>
                        ))
                    }
                </div>*/}

                <MenuBar />

                <div className="flex justify-center items-center gap-4 pr-2">
                    <Link className='hidden sm:flex' href="/dashboard">Dashboard</Link>
                    <DarkModeButton/>
                    <ToggleMenu/>
                </div>
            </div>

        </>
    );
};

export default Navbar;
