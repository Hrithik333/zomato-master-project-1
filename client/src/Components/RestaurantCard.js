import React from 'react';
import { AiTwotoneStar } from "react-icons/ai";

const RestaurantCard = () => {
    return (
        <>
            <div className="bg-white p-2 rounded-2xl transition duration-700 ease-in-out hover:shadow-lg w-full md:w-1/2 lg:w-1/3 mb-40">
                <div className="w-full h-56 lg:h-64 relative">
                    <div className="absolute bottom-4 w-full flex items-end justify-between">
                        <div className="flex flex-col gap-2 items-start">
                            <span className="bg-zomato-400 text-white px-2 py-1 text-sm rounded">₹75 OFF</span>
                            <span className="bg-blue-600 text-white px-2 py-1 text-sm rounded">Pro extra 10% off</span>
                        </div>
                        <span className="bg-white bg-opacity-75 p-1 rounded mr-3">42 min</span>
                    </div>
                    <img src="https://b.zmtcdn.com/data/pictures/7/19722897/11371bfbad32252cddfdcf2989936ef8_o2_featured_v2.jpg?output-format=webp" alt="food" className="rounded-2xl w-full h-full" />
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xl font-medium">La Pino'z Pizza</h4>
                        <span className="bg-green-800 text-sm text-white p-1 rounded flex items-center">
                            4.1 <AiTwotoneStar />
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-gray-500">
                        <h4>Pizza, Fast Food, Beverages</h4>
                        <p>₹150 for one</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestaurantCard
