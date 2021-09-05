import React, { useState } from 'react';

// Components
import DeliveryCarousel from './DeliveryCarousel';
import RestaurantCard from '../RestaurantCard';

const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "123456",
            photos: [
                "https://b.zmtcdn.com/data/pictures/7/19722897/11371bfbad32252cddfdcf2989936ef8_o2_featured_v2.jpg?output-format=webp"
            ],
            name: "La Pino'z Pizza",
            cuisine: ["Pizza", "Fast Food", "Beverages"],
            isPro: false,
            isOff: false,
            averageCost: 150,
            durationOfDelivery: 41,
            restaurantReviewValue: 4.1
        },
        {
            _id: "123456-2",
            photos: [
                "https://b.zmtcdn.com/data/pictures/8/18694788/ba50a5176f9b3abf84a4b734543474a2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name: "Pizza Hut",
            cuisine: ["Pizza", "Fast Food", "Desserts"],
            isPro: true,
            isOff: 75,
            averageCost: 150,
            durationOfDelivery: 50,
            restaurantReviewValue: 4.1
        },
        {
            _id: "123456-3",
            photos: [
                "https://b.zmtcdn.com/data/pictures/0/18818190/8b785eecf26ae650bd21307fa92fbe70.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name: "Bake and Bite",
            cuisine: ["Bakery", "Desserts", "Fast Food"],
            isPro: false,
            isOff: 75,
            averageCost: 150,
            durationOfDelivery: 41,
            restaurantReviewValue: 4.1
        },

    ]);

    return (
        <>
            <DeliveryCarousel />
            <div className="flex flex-wrap justify-between">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id} />
                ))}

            </div>
        </>
    )
};

export default Delivery;
