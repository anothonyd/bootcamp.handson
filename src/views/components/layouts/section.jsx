import { Outlet } from "react-router-dom";
import Footer from "./footer";
import HeaderContent from "../sections/HeaderContent";

export default function Section() {
    return (
        <div className='relative top-0 flex flex-col justify-between items-center right-0 w-full md:w-[82%] h-full p-3 md:ps-0'>
            <div className="relative w-full">
                <HeaderContent />
                <hr />
            </div>
            <main className="relative w-full bg-white h-full flex">
                <hr />
                <Outlet />
            </main>
            <div className="relative w-full">
                <hr />
                <Footer />
            </div>
        </div>
    )
}
