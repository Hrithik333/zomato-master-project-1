import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

// components
import MenuCollection from '../../Components/Restaurant/MenuCollection';

// redux action
import { getImage } from '../../Redux/Reducers/Image/image.action';

const Menu = () => {
    const [menus, setMenus] = useState({ images: [] });

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (reduxState) {
            dispatch(getImage(reduxState?.menuImages)).then((data) => {
                const images = [];
                data.payload.image.images.map(({ location }) => images.push(location));
                setMenus(images);
            });
        }
    }, [reduxState, dispatch]);

    return (
        <>
            <div className="flex flex-wrap gap-3 cursor-pointer">
                <MenuCollection menuTitle="Menu" pages={menus.length} image={menus} />
            </div>
        </>
    );
}

export default Menu
