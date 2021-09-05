import React from 'react'
import Slider from "react-slick";

import { NextArrow, PrevArrow } from '../CarouselArrows';

const Brand = () => {
    const logos = [];

    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            <Slider {...settings}>
                {logos.map((logo) => (
                    <div className="w-24 h-24">
                        <img src={logo} alt="brand" className="w-full h-full" />
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default Brand
