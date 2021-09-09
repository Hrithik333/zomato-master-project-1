import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { MdClose } from 'react-icons/md';

// components
import MenuListContainer from './MenuListContainer';

const FloatingMenuButton = () => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleMenu = () => {
        setIsClicked((prev) => !prev);
    }

    return (
        <>
            <div className="fixed bottom-2 right-2  flex flex-col gap-3 items-end z-30 md:hidden">
                {isClicked && <div className="bg-white p-3 h-48 overflow-y-scroll">
                    <MenuListContainer />
                </div>}
                <button
                    onClick={toggleMenu}
                    className=" text-white bg-yellow-900 flex items-center gap-2 px-3 py-2 rounded-full md:hidden">
                    {isClicked ? <MdClose /> : <HiMenu />} Menu
                </button>
            </div>
        </>
    )
}

export default FloatingMenuButton
