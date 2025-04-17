import React from 'react';
import DarkModeButton from "@/app/components/header/darkModeButton";
import Link from "next/link";
import ToggleMenu from "@/app/components/header/ToggleMenu";
import MenuBar from "@/app/components/header/MenuBar";
import Image from "next/image";

const Navbar = () => {
    return (
        <>


            <div
                className='fixed top-0 right-0 left-0 flex bg-transparent bg-gradient-to-b from-[var(--background)] to-transparent justify-between p-2 items-center z-20'>
                <Link href={"/"} className="  font-semibold whitespace-nowrap text-amber-600 text-xl">
                    <Image
                        src="/images/logo.png"
                        priority={true}
                        width={272}
                        height={43}
                        alt="cosmo logo"
                    />
                </Link>

                <MenuBar/>

                <div className="flex justify-center items-center gap-4 pr-2">
                    <Link className='hidden sm:flex' href="/dashboard">Dashboard</Link>
                    <div className='hidden sm:flex'>
                        <DarkModeButton/>
                    </div>
                    <ToggleMenu/>
                </div>
            </div>
        </>
    );
};

export default Navbar;