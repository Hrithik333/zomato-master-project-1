import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// components
import Navbar from '../Components/Navbar/CheckoutNavbar'

// redux action
import { getCart } from "../Redux/Reducers/Cart/cart.action";

const CheckoutLayout = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 lg:px-20">
                {props.children}
            </div>
        </>
    )
}

export default CheckoutLayout
