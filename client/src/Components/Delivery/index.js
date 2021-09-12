import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Components
import DeliveryCarousel from './DeliveryCarousel';
import RestaurantCard from '../RestaurantCard';

const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    const reduxState = useSelector((globalStore) => globalStore.restaurant.restaurants);

    useEffect(() => {
        reduxState.restaurants && setRestaurantList(reduxState.restaurants);
    }, [reduxState.restaurants])

    return (
        <>
            <DeliveryCarousel />
            <h1 className="px-4 text-xl font-medium mt-6 md:text-3xl md:mt-8 md:mb-4">Delivery Restaurants in Jodhpur</h1>
            <div className="flex flex-wrap justify-between">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id} />
                ))}
            </div>
        </>
    )
};

export default Delivery;
