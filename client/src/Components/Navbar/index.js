import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import gravatar from "gravatar";

// components
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

const MobileNav = ({ SignIn, SignUp }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const reduxState = useSelector((global) => global.user.user);

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
                <div className="flex items-center gap-3 relative">
                    <button className="bg-zomato-400 text-white py-1 px-3 rounded-full">
                        Use App
                    </button>
                    {reduxState?.user?.fullname ? (
                        <>
                            <span
                                onClick={() => setIsDropdownOpen((prev) => !prev)}
                                className="border border-gray-300   text-zomato-400 rounded-full w-12 h-12"
                            >
                                <img
                                    src={gravatar.url(reduxState?.user?.email)}
                                    alt={reduxState?.user?.email}
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </span>
                            {isDropdownOpen && (
                                <div className="absolute shadow-lg py-3 z-10 w-full bg-white flex flex-col gap-2 -bottom-12 -right-4">
                                    <button>Sign out</button>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <span
                                onClick={() => setIsDropdownOpen((prev) => !prev)}
                                className="border border-gray-300 p-2  text-zomato-400 rounded-full"
                            >
                                <FaUserAlt />
                            </span>
                            {isDropdownOpen && (
                                <div className="absolute shadow-lg py-3 z-10 w-full bg-white flex flex-col gap-2 -bottom-20 -right-4">
                                    <button onClick={SignIn}>Sign In</button>
                                    <button onClick={SignUp}>Sign Up</button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

const LargeNav = ({ SignIn, SignUp }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const reduxState = useSelector((global) => global.user.user);

    return (
        <div className="container mx-auto px-20">
            <div className="w-full flex items-center py-4 gap-4 ">
                <div className="w-44">
                    <img
                        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
                <div className="w-full flex items-center gap-3 bg-white shadow-md p-3 border border-gray-200 rounded w-2/3">
                    <div className="flex items-center gap-2 border-r-2 border-gray-300 mr-2 pr-2">
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
                {reduxState?.user?.fullname ? (
                    <div className="w-40 relative">
                        <div
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            className="border border-gray-300   text-zomato-400 w-16 h-16 rounded-full"
                        >
                            <img
                                src={gravatar.url(reduxState?.user?.email)}
                                alt={reduxState?.user?.email}
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute shadow-lg py-3 z-10 w-full bg-white flex flex-col gap-2 p-2 right-8">
                                <button>Sign out</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex gap-4 lg:gap-8 lg:pl-20">
                        <button onClick={SignIn} className="text-gray-500 text-xl hover:text-gray-800">Login</button>
                        <button onClick={SignUp} className="text-gray-500 text-xl hover:text-gray-800">Signup</button>
                    </div>
                )}
            </div>
        </div>
    )
}

const Navbar = () => {
    const [openSignin, setOpenSignin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);

    const openSignInModal = () => setOpenSignin(true);
    const openSignUpModal = () => setOpenSignup(true);

    return (
        <>
            <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
            <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />
            <nav className="bg-white">
                <div className="lg:hidden">
                    <MobileNav SignIn={openSignInModal} SignUp={openSignUpModal} />
                </div>
                <div className="hidden lg:block">
                    <LargeNav SignIn={openSignInModal} SignUp={openSignUpModal} />
                </div>
            </nav>
        </>
    )
}

export default Navbar
