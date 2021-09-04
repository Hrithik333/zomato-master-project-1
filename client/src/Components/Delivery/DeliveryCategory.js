import React from 'react';

const DeliverySmCard = ({ image, title }) => {
    return (

        <div className="lg:hidden bg-white shadow-md rounded-lg md:w-56">
            <div className="w-full h-24">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-t-lg"
                />
            </div>
            <div>
                <h3 className=" text-center my-1 text-sm">{title}</h3>
            </div>
        </div>

    )
}

const DeliveryLgCard = ({ image, title }) => {
    return (

        <div className="hidden lg:inline-block w-64 h-48">
            <div className="w-full h-full">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-md shadow-lg"
                />
            </div>
            <div>
                <h3 className="my-1 text-xl font-medium">{title}</h3>
            </div>
        </div>
    )
}

const DeliveryCategory = (props) => {
    return (
        <>
            <DeliverySmCard {...props} />
            <DeliveryLgCard {...props} />
        </>
    )
}

export default DeliveryCategory
