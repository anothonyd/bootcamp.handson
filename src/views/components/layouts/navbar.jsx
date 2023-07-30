import { useState } from 'react';
import { GrClose, GrMenu } from "react-icons/gr";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };




    return (
        <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between mx-3 rounded-lg">
            <div className="flex justify-between items-center z-50">
                <span className="text-3xl font-[Poppins] cursor-pointer">

                    HANDSON
                </span>

                <span className="text-3xl cursor-pointer mx-2 md:hidden block" onClick={toggleMenu}>
                    {isMenuOpen ? <GrClose /> : <GrMenu />}
                </span>
            </div>
            <ul
                className={`md:flex rounded-b-lg z-10 md:z-auto md:static  bg-none w-full left-0 md:w-auto md:py-0 md:translate-x-0 ${isMenuOpen ? 'translate-x-0 flex' : 'translate-x-[110%] hidden'
                    } transition-all ease-in duration-300`}>
                    <div className='bg-white rounded-lg md:flex md:items-center gap-5'>
                    <li className=" my-6 md:my-0">
                        <a href="#" className="text-xl hover:text-cyan-500 duration-500">
                            HOME
                        </a>
                    </li>
                    <li className=" my-6 md:my-0">
                        <a href="#" className="text-xl hover:text-cyan-500 duration-500">
                            SERVICE
                        </a>
                    </li>
                    <li className=" my-6 md:my-0">
                        <a href="#" className="text-xl hover:text-cyan-500 duration-500">
                            ABOUT
                        </a>
                    </li>
                    <li className=" my-6 md:my-0">
                        <a href="#" className="text-xl hover:text-cyan-500 duration-500">
                            CONTACT
                        </a>
                    </li>
                    <button
                        className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 hover:bg-cyan-500 rounded"
                    >
                        Get started
                    </button>
                </div>
            </ul>
        </nav>
    );
}
