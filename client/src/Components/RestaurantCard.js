import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { getImage } from '../Redux/Reducers/Image/image.action';

const RestaurantCard = (props) => {
    const dispatch = useDispatch();
    const [image, setImage] = useState({
        images: []
    });

    useEffect(() => {
        props.photos && dispatch(getImage(props.photos)).then((data) => setImage(data.payload.image))
    }, [props.photos])

    return (
        <>
            <div className="bg-white p-4 mb-4 rounded-2xl transition duration-700 ease-in-out hover:shadow-lg w-full md:w-1/2 lg:w-1/3">
                <Link to={`/restaurant/${props._id}`} className="w-full">
                    <div className="w-full h-56 lg:h-64 relative">
                        <div className="absolute bottom-4 w-full flex items-end justify-between">
                            <div className="flex flex-col gap-2 items-start">
                                {props.isOff && (
                                    <span className="bg-zomato-400 text-white px-2 py-1 text-sm rounded">
                                        ₹{`${props.isOff}`} OFF
                                    </span>
                                )}
                                {props.isPro && (
                                    <span className="bg-blue-600 text-white px-2 py-1 text-sm rounded">
                                        Pro extra 10% off
                                    </span>
                                )}
                            </div>
                            <span className="bg-white bg-opacity-75 p-1 rounded mr-3">
                                {props.durationOfDelivery} min
                            </span>
                        </div>
                        <img src={image.images.length && image.images[0].location} alt="restaurant" className="rounded-2xl w-full h-full" />
                    </div>
                    <div className="flex flex-col gap-2 my-2">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-medium">{props.name}</h4>
                            <span className="bg-green-800 text-sm text-white p-1 rounded flex items-center">
                                {props.restaurantReviewValue} <AiTwotoneStar />
                            </span>
                        </div>
                        <div className="flex items-center justify-between text-gray-500">
                            <h4>{props.cuisine.join(", ")}</h4>
                            <p>₹{props.averageCost} for one</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default RestaurantCard
