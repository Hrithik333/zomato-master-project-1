import React from 'react';
import { RiArrowRightSFill } from "react-icons/ri";

const CarouselCard = () => {
    return (
        <>
            <div className="w-full h-64 relative px-2 md:px-4 overflow-hidden">
                <div className="w-full h-full relative">
                    <img
                        src="https://b.zmtcdn.com/data/reviews_photos/fb7/d80f664aca19610773b1c81318d98fb7_1576140980.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                        alt="food"
                        className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
                    />
                    <div
                        className="w-full h-full absolute inset-0  rounded-lg"
                        style={{
                            background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
                        }}
                    />
                </div>
                <div className="absolute w-full left-8  bottom-2 text-white ">
                    <h4 className="z-10">Best of jodhpur</h4>
                    <h6 className="z-10 flex items-center">
                        20 Places <RiArrowRightSFill />
                    </h6>
                </div>
            </div>
        </>
    )
}

export default CarouselCard
