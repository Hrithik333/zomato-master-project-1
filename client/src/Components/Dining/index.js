import React from 'react';

// components
import DiningCarousel from './DiningCarousel'

const Dining = () => {
    return (
        <div>
            <h1 className="text-xl md:my-8 px-4 md:text-3xl md:font-semibold">Collections</h1>
            <p className="text-lg text-gray-500 px-4 mb-2">Explore curated lists of top restaurants, cafes, pubs, and bars in Jodhpur, based on trends</p>
            <DiningCarousel />
            <h1 className="text-xl md:my-8 px-4 md:text-3xl md:font-semibold">Dine-Out Restaurants in Jodhpur</h1>
        </div>
    )
}

export default Dining