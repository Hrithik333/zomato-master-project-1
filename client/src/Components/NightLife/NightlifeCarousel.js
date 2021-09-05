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
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    arrows: false,

                }
            }
        ]
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
