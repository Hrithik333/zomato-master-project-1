import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineCompass } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';

// components
import FloatingMenuButton from '../../Components/Restaurant/OrderOnline/FloatingMenuButton';
import FoodList from '../../Components/Restaurant/OrderOnline/FoodList';
import MenuListContainer from '../../Components/Restaurant/OrderOnline/MenuListContainer';

// Redux actions
import { getFoodList } from '../../Redux/Reducers/Food/food.action';

const OrderOnline = () => {
    const [menu, setMenu] = useState([]);
    const [selected, setSelected] = useState("");

    const onClickHandler = (e) => {
        if (e.target.id) {
            setSelected(e.target.id)
        }
        return;
    }

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );
    const dispatch = useDispatch();

    useEffect(() => {
        reduxState &&
            dispatch(getFoodList(reduxState.menu)).then((data) =>
                setMenu(data.payload.menus.menus)
            );
    }, [dispatch, reduxState]);

    return (
        <>
            <div className="w-full h-screen flex mb-40">
                <aside className="hidden md:flex flex-col gap-3 border-r border-gray-200 overflow-y-scroll h-screen w-1/4">
                    {menu.map((item) => (
                        <MenuListContainer {...item} key={item._id} onClickHandler={onClickHandler} selected={selected} />
                    ))}
                </aside>
                <div className="w-full px-3 md:w-3/4">
                    <div className="mb-4 pl-3">
                        <h2 className="text-xl md:text-2xl font-semibold">Order Online</h2>
                        <h4 className="flex items-center gap-2 font-light text-gray-500">
                            <AiOutlineCompass /> Live track your order | <BiTime /> 45 min
                        </h4>
                    </div>

                    <section className="h-screen overflow-y-scroll flex flex-col gap-3 md:gap-5">
                        {menu.map((item) => (
                            <FoodList key={item._id} {...item} />
                        ))}
                    </section>

                </div>
            </div>
            <FloatingMenuButton />
        </>
    )
}

export default OrderOnline;
