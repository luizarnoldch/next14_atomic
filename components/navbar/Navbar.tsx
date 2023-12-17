"use client";

import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed flex flex-col items-center justify-center h-screen w-24 bg-transparent z-20">
            <div className="absolute top-0 mt-4">
                <Image src="/atomic.png" alt="Logo" width={20} height={20} />
            </div>

            <button
                className="flex flex-col justify-center items-center w-8 overflow-hidden h-12 hamburger-button"
                onClick={() => setIsMenuOpen(true)}
            >
                <span className="block w-full h-0.5 bg-white"></span>
                <span className="block w-full h-0.5 bg-white my-1"></span>
                <span className="block w-full h-0.5 bg-white"></span>
            </button>

            <div
                className={`fixed top-0 left-0 w-full h-full bg-black z-10 ${
                    isMenuOpen ? "menu-transition-in" : "menu-transition-out"
                } ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <button
                    className="absolute top-5 right-5"
                    onClick={() => setIsMenuOpen(false)}
                >
                    {/* Dibujo de la 'X' */}
                    <span className="block w-6 h-0.5 bg-white rotate-45"></span>
                    <span className="block w-6 h-0.5 bg-white -rotate-45"></span>
                </button>
                <div className="text-white">Navegación</div>
            </div>
        </nav>
    );
};

export default Navbar;
