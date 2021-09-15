import React, { useEffect } from "react";

// Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";
import { useDispatch } from "react-redux";

// redux actions
import { getCart } from "../Redux/Reducers/Cart/cart.action";

const HomeLayout = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    return <>
        <Navbar />
        <FoodTab />
        <div className="container mb-20 mx-auto px-4 lg:px-20">
            {props.children}
        </div>
    </>
}

export default HomeLayout;