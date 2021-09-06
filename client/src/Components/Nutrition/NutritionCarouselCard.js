import React from 'react';

const NutritionCard = ({ image, title }) => {
    return (

        <div className="bg-white lg:my-4 shadow-md md:p-4 w-24 lg:w-64 rounded-lg md:w-56">
            <div className="w-full h-18 md:h-36">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full md:object-cover rounded-t-lg"
                />
            </div>
            <div>
                <h3 className=" text-center my-1 text-sm font-light md:text-xl">{title}</h3>
            </div>
        </div>

    )
}

const NutritionCarouselCard = (props) => {
    return (
        <>
            <NutritionCard {...props} />
        </>
    )
}

export default NutritionCarouselCard
