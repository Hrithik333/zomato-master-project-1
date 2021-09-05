import React from 'react';
import Slider from 'react-slick';

// components
import { NextArrow, PrevArrow } from '../CarouselArrows';
import CarouselCard from '../CarouselCard';

const NightlifeCarousel = () => {
    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
            </Slider>
        </div>
    )
}

export default NightlifeCarousel
