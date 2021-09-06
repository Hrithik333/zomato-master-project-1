import React from 'react';

// components
import NutritionCarousel from './NutritionCarousel';
import NutritionHeroCarousel from './NutritionHeroCarousel';

const Nutrition = () => {
    return (
        <div>
            <NutritionHeroCarousel />
            <div className="my-8">
                <NutritionCarousel />
            </div>
        </div>
    )
}

export default Nutrition;
