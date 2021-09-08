import React from "react";
import { TiStar } from "react-icons/ti";

const OverviewSimilarRestaurantcard = (props) => {
    return (
        <>
            <div className="mx-2">
                <div className="bg-white shadow rounded-md">
                    <div className="w-full h-48 ">
                        <img
                            src={props.image}
                            alt={props.title}
                            className="w-full h-full object-cover rounded-t-md"
                        />
                    </div>
                    <div className="flex flex-col gap-2 p-2">
                        <h3 className="font-semibold text-lg">{props.title}</h3>
                        <div className="flex items-center justify-between text-sm gap-1">
                            <span className="flex items-center gap-1">
                                <span className="flex items-center gap-1 bg-green-700 text-white p-1 rounded">
                                    3.5
                                    <TiStar />
                                </span>
                                Dining
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="flex items-center gap-1 bg-green-700 text-white p-1 rounded">
                                    3.0
                                    <TiStar />
                                </span>
                                Delivery
                            </span>
                        </div>
                        <h4>Street Food, Beverages, Tea</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OverviewSimilarRestaurantcard;