import React from 'react'

const NutritionCarouselCard = ({ image }) => {
    return (
        <div className="w-full h-48 md:h-64 lg:h-72">
            <img
                src={image}
                alt="nutrition"
                className="w-full h-full"
            />
        </div>
    )
}

export default NutritionCarouselCard
