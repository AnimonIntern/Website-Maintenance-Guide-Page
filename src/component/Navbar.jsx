import React from "react";
import { useState } from "react"
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2"
import Button from "./Buttons/Button";
import Button2 from "./Buttons/Button-2";


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    // Nav Bar Start
    return (
        <nav>
            <div className="w-full h-[90px]">
                <div className="max-w-[1240] mx-14 py-4 font-medium flex justify-between items-center max-sm:mx-6">
                    <div className="md:cursor-pointer">
                        <img src="https://www.animonlive.com/wp-content/uploads/2022/12/animon-logo.png" alt="animon-live-logo" width={130} />
                    </div>
                    <div className=' hidden md:block'>
                        <Button />
                    </div>
                    <div onClick={handleNav} className=" block md:hidden">
                        {nav ? <HiXMark size={25} className=" text-red-600" /> : <HiBars3BottomRight size={30} className=" text-red-600" />}
                    </div>

                    {/* mobile menu */}
                    <div className= {nav ? " w-full bg-white text-black absolute top-[90px] left-0 text-center p-4" : "absolute left-[-100%]"}>
                        <Button2 />
                    </div>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;
