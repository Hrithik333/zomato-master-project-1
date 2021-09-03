import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

const MobileNav = () => {
    return (
        <>
            <div className="flex items-center justify-between shadow-md p-4">
                <div className="w-28">
                    <img
                        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-zomato-400 text-white py-1 px-3 rounded-full">Use App</button>
                    <span className="border border-gray-300 p-2  text-zomato-400 rounded-full">
                        <FaUserAlt />
                    </span>
                </div>
            </div>
        </>
    )
}

const MediumNav = () => {
    return (
        <div className="w-full p-4 lg:px-16 flex items-center gap-4 ">
            <div className="w-32">
                <img
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt="logo"
                    className="w-full h-full"
                />
            </div>
            <div className="w-full flex items-center gap-3 bg-white shadow-md p-3 border border-gray-200 rounded lg:w-2/3">
                <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
                    <span className="text-zomato-400">
                        <HiLocationMarker />
                    </span>
                    <input type="text" placeholder="Bengaluru" className="focus:outline-none" />
                    <IoMdArrowDropdown />
                </div>
                <div className="flex items-center gap-2 w-full">
                    <RiSearch2Line />
                    <input type="search" placeholder="Search for restaurant, cuisine or a dish" className="focus:outline-none w-full" />
                </div>
            </div>
            <div className="flex gap-4 lg:gap-8 lg:pl-20">
                <button className="text-gray-500 text-xl hover:text-gray-800">Login</button>
                <button className="text-gray-500 text-xl hover:text-gray-800">Signup</button>
            </div>
        </div>
    )
}

const Navbar = () => {
    return (
        <>
            <nav className="bg-white">
                <div className="md:hidden">
                    <MobileNav />
                </div>
                <div className="hidden md:block">
                    <MediumNav />
                </div>
            </nav>
        </>
    )
}

export default Navbar
