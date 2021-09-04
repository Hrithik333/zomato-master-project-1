import React from 'react';
import Slider from "react-slick";

// components
import DeliveryCategory from './DeliveryCategory';
import { NextArrow, PrevArrow } from '../CarouselArrows';


const DeliveryCarousel = () => {
    const categories = [
        {
            image: "https://b.zmtcdn.com/data/dish_images/c598d69f4864f3cba4b0de2d8efc0e521612436494.png",
            title: "Pizza"
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/04e1dbc0ec30031e5f26d0bef922ea0c.png",
            title: "Paneer"
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
            title: "Chicken"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602781186.png",
            title: "Chaat"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/dfa447d5de421602c1af7d58349cae1f1612436391.png",
            title: "Thali"
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
            title: "Rolls"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/770ba11e5159e6740d68f71f1b838a261612463246.png",
            title: "Cake"
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/6e69685d22c94ffd42ccd7e70e246bd9.png",
            title: "Burger"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/83befdecd77e57a8c53d22b67d0b866d1612437905.png",
            title: "Dosa"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/d72841d1b5b27b763c25a16bb9fe34161602870829.png",
            title: "Dal"
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
            title: "Biryani"
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/51ddb8a2227b36f36b74c4ea3c26823a.png",
            title: "Paratha"
        }
    ]

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
        <>
            <h1 className="text-xl font-semibold mb-4 lg:text-3xl lg:mb-8">Inspiration for your first order</h1>
            <div className="lg:hidden flex flex-wrap justify-between gap-3">
                {categories.map((food) => <DeliveryCategory {...food} />)}
            </div>

            <div className="hidden lg:block">
                <Slider {...settings}>
                    {categories.map((food) => <DeliveryCategory {...food} />)}
                </Slider>
            </div>
        </>
    )
}

export default DeliveryCarousel;
