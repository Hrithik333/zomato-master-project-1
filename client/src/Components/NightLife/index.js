import React from 'react';

// components
import NightlifeCarousel from './NightlifeCarousel';

const Nightlife = () => {
    return (
        <div>
            <h1 className="text-2xl my-4 px-2 md:my-8 md:px-4 md:text-3xl md:font-semibold">Collections</h1>
            <p className=" text-sm px-2 md:text-lg text-gray-500 md:px-4 mb-4 lg:mb-2">Explore curated lists of top restaurants, cafes, pubs, and bars in Jodhpur, based on trends</p>
            <NightlifeCarousel />
            <h1 className="text-xl my-6 md:my-8 px-4 md:text-3xl md:font-semibold">Nightlife Restaurants in Jodhpur</h1>
        </div>
    )
}

export default Nightlife
