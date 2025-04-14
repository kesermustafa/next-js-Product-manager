"use client";
import { useEffect, useState } from "react";

const DarkModeButton = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Sayfa yüklendiğinde localStorage'dan tema bilgisini al
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div
            onClick={toggleTheme}
            className="flex whitespace-nowrap px-2 py-1 rounded border border-gray-500"
        >
            {isDark ? '🌞 Light' : '🌙 Dark'}
        </div>
    );
};

export default DarkModeButton;
