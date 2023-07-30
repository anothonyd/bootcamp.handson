
import { GrClose, GrMenu, GrFlows } from 'react-icons/gr';
import { useState, useEffect } from 'react';
import LoaderScreen from "../views/components/LoaderScreen";
import Navbar from "../views/components/layouts/navbar"
import Section from "../views/components/layouts/section"
import Sidenav from "../views/components/layouts/sidenav"

function RootLayout() {
    const [isMenuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);


    return (
        <div className="relative w-full h-screen">
            {loading ? (
                <LoaderScreen />

            ) : (

                <div className="bg-blue-200 top-0 bottom-0 w-full h-max pt-3">
                    <Navbar />
                    <div className="relative flex">
                        <div className="fixed bg-blue-200 shadow p-3 rounded-full z-50 mx-5 right-0 top-28 md:hidden" onClick={toggleMenu}> 
                        {isMenuOpen ? <GrFlows /> : <GrFlows />}</div>

                        <div className={`fixed z-40 md:relative ${isMenuOpen ? 'translate-x-0 flex' : 'translate-x-[110%] hidden'} w-[20rem] md:w-[18%]`}>
                            <Sidenav />
                        </div>
                        <Section />
                    </div>
                </div>
            )}
        </div>
    )
}

export default RootLayout
