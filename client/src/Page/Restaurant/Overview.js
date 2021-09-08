import React from 'react'
import Slider from 'react-slick';
import { Link, useParams } from 'react-router-dom'
import { IoMdArrowDropright } from 'react-icons/io';
import ReactStars from 'react-rating-stars-component';

// components
import MenuCollection from '../../Components/Restaurant/MenuCollection';
import OverviewSimilarRestaurantcard from '../../Components/Restaurant/OverviewSimilarRedtaurantCard';
import { NextArrow, PrevArrow } from '../../Components/CarouselArrows';
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard';
import MapView from '../../Components/Restaurant/MapView';

const Overview = () => {
    const { id } = useParams();
    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <>
            <div className="relative flex flex-col md:gap-8 md:flex-row">
                <div className="w-full md:w-3/5">
                    <h2 className="font-semibold text-lg md:text-2xl my-4">
                        About this place
                    </h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-xl mb-4">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex items-center gap-1 text-zomato-400">
                                See all menus <IoMdArrowDropright />
                            </span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-3 cursor-pointer">
                        <MenuCollection menuTitle="Menu" pages="1" image="https://b.zmtcdn.com/data/menus/897/19722897/a61066474f03880a25f7853e573053cd.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" />
                    </div>
                    <h4 className="text-xl mt-6 mb-2">Cuisines</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="border border-gray-500 text-blue-400 px-2 py-1 rounded-full">
                            Pizza
                        </span>
                        <span className="border border-gray-500 text-blue-400 px-2 py-1 rounded-full">
                            Fast Food
                        </span>
                        <span className="border border-gray-500 text-blue-400 px-2 py-1 rounded-full">
                            Beverages
                        </span>
                    </div>
                    <h4 className="text-xl mt-6 mb-2">Average Cost</h4>
                    <div>
                        <h6 className="text-gray-500">₹800 for two people (approx.)</h6>
                        <p className="text-gray-400 text-sm">Exclusive of applicable taxes and charges, if any</p>
                    </div>
                    <div>
                        <h4 className="text-xl mt-6 mb-2">Similar Restaurants</h4>
                        <Slider {...settings}>
                            <OverviewSimilarRestaurantcard image="https://b.zmtcdn.com/data/pictures/6/19521806/a069b6329cbbb3f8e0198f51bbdb69d2_featured_v2.jpg?output-format=webp" title="Real Taste shakes" />
                            <OverviewSimilarRestaurantcard image="https://b.zmtcdn.com/data/pictures/6/19521806/a069b6329cbbb3f8e0198f51bbdb69d2_featured_v2.jpg?output-format=webp" title="Real Taste shakes" />
                            <OverviewSimilarRestaurantcard image="https://b.zmtcdn.com/data/pictures/6/19521806/a069b6329cbbb3f8e0198f51bbdb69d2_featured_v2.jpg?output-format=webp" title="Real Taste shakes" />
                            <OverviewSimilarRestaurantcard image="https://b.zmtcdn.com/data/pictures/6/19521806/a069b6329cbbb3f8e0198f51bbdb69d2_featured_v2.jpg?output-format=webp" title="Real Taste shakes" />
                            <OverviewSimilarRestaurantcard image="https://b.zmtcdn.com/data/pictures/6/19521806/a069b6329cbbb3f8e0198f51bbdb69d2_featured_v2.jpg?output-format=webp" title="Real Taste shakes" />
                        </Slider>
                    </div>
                    <div className=" mt-6 mb-2">
                        <h4 className="text-xl">Rate your delivery experience</h4>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="my-4 md:hidden w-full flex flex-col gap-4">
                        <MapView
                            title="La Pino'z Pizza"
                            phone="+912913550473"
                            mapLocation={[26.27596515304485, 73.00643555136229]} address="Plot 582A/A1, 9th C Road, Sardarpura, Jodhpur"
                        />
                    </div>
                    <h4 className="text-xl mt-6 mb-4">Review Highlights</h4>
                    <div className="flex flex-col gap-4">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
                <aside style={{ height: "fit-content" }} className=" hidden bg-white p-4 shadow-md rounded-xl md:flex md:w-2/5 sticky top-2 flex-col gap-4">
                    <MapView
                        title="La Pino'z Pizza"
                        phone="+912913550473"
                        mapLocation={[26.27596515304485, 73.00643555136229]} address="Plot 582A/A1, 9th C Road, Sardarpura, Jodhpur"
                    />
                </aside>
            </div>
        </>
    )
}

export default Overview
