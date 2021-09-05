import React from 'react';

// components
import DiningCarousel from './DiningCarousel'

const Dining = () => {
    return (
        <div>
            <h1 className="text-3xl mb-4 px-4 font-semibold">Collections</h1>
            <p className="text-lg text-gray-500 px-4 mb-2">Explore curated lists of top restaurants, cafes, pubs, and bars in Jodhpur, based on trends</p>
            <DiningCarousel />
        </div>
    )
}

export default Dining
