import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="fixed flex flex-col items-center justify-center h-screen w-24 bg-transparent">
            <div className="absolute top-0 mt-4">
                <Image src="/atomic.png" alt="Logo" width={20} height={20} />
            </div>

            <button className="flex flex-col justify-center items-center w-8 overflow-hidden h-12 hamburger-button">
                <span className="block w-full h-0.5 bg-white"></span>
                <span className="block w-full h-0.5 bg-white my-1"></span>
                <span className="block w-full h-0.5 bg-white"></span>
            </button>

        </nav>
    );
};

export default Navbar;
