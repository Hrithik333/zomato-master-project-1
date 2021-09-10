import React, { useState } from 'react';
import { IoMdArrowDropright, IoMdArrowDropup } from 'react-icons/io';
import { IoCloseSharp } from "react-icons/io5"
import FoodItem from './FoodItem';

const CartSm = ({ toggle }) => {
    return (
        <>
            <div className="md:hidden flex items-center justify-between">
                <div className="flex flex-col items-start">
                    <small className="flex items-center gap-1" onClick={toggle}>
                        1 Item <IoMdArrowDropup />
                    </small>
                    <h4>
                        ₹300 (plus tax)
                    </h4>
                </div>
                <button className="flex items-center gap-1 bg-zomato-400 px-3 py-1 rounded-lg text-white" >
                    Continue <IoMdArrowDropright />
                </button>
            </div>
        </>
    )
}

const CartLg = ({ toggle }) => {
    return (
        <>
            <div className="hidden md:flex items-center justify-between px-20 mx-auto">
                <div className="flex gap-3 items-start">
                    <span className="border border-gray-300 p-1 rounded cursor-pointer bg-white" onClick={toggle}>
                        <IoMdArrowDropup />
                    </span>
                    <h4>
                        Your orders (1)
                    </h4>
                </div>
                <div className="flex items-center gap-2">
                    <h4 className="text-xl">
                        Subtotal: ₹300
                    </h4>
                    <button className="flex items-center gap-1 text-lg font-light h-10 bg-zomato-400 px-3 py-1 rounded-lg text-white" >
                        Continue <IoMdArrowDropright />
                    </button>
                </div>
            </div>
        </>
    )
}

const CartContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => setIsOpen(prev => !prev)
    const closeCart = () => setIsOpen(false)

    return (
        <>
            {isOpen && (
                <div className="fixed overflow-y-scroll h-48 w-full bg-white z-100 p-2 bottom-14 px-3 md:px-20 ">
                    <div className="flex items-center justify-between text-xl font-semibold">
                        <h3>Your Orders</h3>
                        <IoCloseSharp className="cursor-pointer" onClick={closeCart} />
                    </div>
                    <hr className="my-2" />

                    <div className="flex flex-col gap-2">
                        <FoodItem name="Pizza" quantity="3" price="90" />
                        <FoodItem name="Pizza" quantity="3" price="90" />
                        <FoodItem name="Pizza" quantity="3" price="90" />
                        <FoodItem name="Pizza" quantity="3" price="90" />
                    </div>
                </div>
            )}
            <div className="fixed w-full bg-white bottom-0 z-100 p-2 px-3">
                <CartSm toggle={toggleCart} />
                <CartLg toggle={toggleCart} />
            </div>
        </>
    )
}

export default CartContainer
