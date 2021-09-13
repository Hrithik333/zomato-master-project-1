import React, { useState, useEffect } from 'react'
import Slider from 'react-slick';
import { Link, useParams } from 'react-router-dom'
import { IoMdArrowDropright } from 'react-icons/io';
import ReactStars from 'react-rating-stars-component';
import { useSelector, useDispatch } from "react-redux";

// components
import MenuCollection from '../../Components/Restaurant/MenuCollection';
import OverviewSimilarRestaurantcard from '../../Components/Restaurant/OverviewSimilarRedtaurantCard';
import { NextArrow, PrevArrow } from '../../Components/CarouselArrows';
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard';
import MapView from '../../Components/Restaurant/MapView';

// Redux actions
import { getImage } from '../../Redux/Reducers/Image/image.action';
import { getReviews } from '../../Redux/Reducers/Reviews/review.action';

const Overview = () => {
    const [menuImage, setMenuImages] = useState({ images: [] });
    const [reviews, setReviews] = useState([]);

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

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (reduxState) {
            dispatch(getImage(reduxState?.menuImages)).then((data) => {
                const images = [];
                data.payload.image.images.map(({ location }) => images.push(location));
                setMenuImages(images);
            });

            dispatch(getReviews(reduxState._id)).then((data) => setReviews(data.payload.reviews))
        }
    }, [reduxState, dispatch]);

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const getLatLong = (mapAddress) => {
        return (mapAddress?.split(",").map((item) => parseFloat(item)));
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
                        <MenuCollection menuTitle="Menu" pages={menuImage.length} image={menuImage} />
                    </div>
                    <h4 className="text-xl mt-6 mb-2">Cuisines</h4>
                    <div className="flex flex-wrap gap-2">
                        {reduxState?.cuisine.map((item) => (
                            <span className="border border-gray-500 text-blue-400 px-2 py-1 rounded-full">
                                {item}
                            </span>
                        ))}
                    </div>
                    <h4 className="text-xl mt-6 mb-2">Average Cost</h4>
                    <div>
                        <h6 className="text-gray-500">₹{reduxState?.averageCost} for two people (approx.)</h6>
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
                            title={reduxState?.name}
                            phone={`+91${reduxState?.contactNumber}`}
                            mapLocation={getLatLong(reduxState?.mapLocation)}
                            address={reduxState?.address}
                        />
                    </div>
                    <h4 className="text-xl mt-6 mb-4">Review Highlights</h4>
                    <div className="flex flex-col gap-4">
                        {reviews.map((reviewData) => (
                            <ReviewCard {...reviewData} />
                        ))}
                    </div>
                </div>
                <aside style={{ height: "fit-content" }} className=" hidden bg-white p-4 shadow-md rounded-xl md:flex md:w-2/5 sticky top-2 flex-col gap-4">
                    <MapView
                        title={reduxState?.name}
                        phone={`+91${reduxState?.contactNumber}`}
                        mapLocation={getLatLong(reduxState?.mapLocation)}
                        address={reduxState?.address}
                    />
                </aside>
            </div>
        </>
    )
}

export default Overview
