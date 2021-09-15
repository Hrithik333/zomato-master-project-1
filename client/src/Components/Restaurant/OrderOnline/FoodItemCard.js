import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { AiOutlinePlus } from 'react-icons/ai'
import ReactStars from 'react-rating-stars-component'

// Redux actions
import { getFood } from '../../../Redux/Reducers/Food/food.action';
import { getImage } from '../../../Redux/Reducers/Image/image.action';
import { addCart } from "../../../Redux/Reducers/Cart/cart.action";

const FoodItemCard = (props) => {
    const [food, setFood] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFood(props._id)).then((data) => {
            setFood(data.payload.food);
            dispatch(getImage(data.payload.food.photos)).then((data) => {
                const { images } = data.payload.image;
                images.length &&
                    setFood((prev) => ({ ...prev, image: images[0].location }));
            });
        });
    }, [dispatch, props._id]);

    const addFoodToCart = () => {
        dispatch(addCart({ ...food, quantity: 1, totalPrice: food.price }));
        setFood((prev) => ({ ...prev, isAddedToCart: true }));
    };

    return (
        <>
            {food?.name && (
                <div className="flex items-start gap-2 md:justify-between">
                    {food?.image && (
                        <div className="w-3/12 h-20 md:h-28 lg:h-36 md:px-3">
                            <img
                                src={food?.image}
                                alt="food item"
                                className="w-full h-full rounded-lg"
                            />
                        </div>
                    )}
                    <div className="w-3/4 md:w-7/12 flex flex-col md:gap-1">
                        <div className="flex justify-between">
                            <h3 className="text-lg md:text-xl font-semibold">{food?.name}</h3>
                            <button
                                onClick={addFoodToCart}
                                disabled={food.isAddedToCart}
                                className="md:hidden flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 md:px-4 md:py-2 rounded-lg"
                            >
                                {food.isAddedToCart ? (
                                    "Added"
                                ) : (
                                    <>
                                        <AiOutlinePlus /> Add
                                    </>
                                )}
                            </button>
                        </div>
                        <ReactStars
                            count={5}
                            value={props.rating}
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <h5>₹{food?.price}</h5>
                        <p className="truncate">{food?.description}</p>
                    </div>
                    <div className="hidden md:block w-2/12">
                        <button
                            onClick={addFoodToCart}
                            disabled={food.isAddedToCart}
                            className="flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-4 py-2 rounded-lg"
                        >
                            {food.isAddedToCart ? (
                                "Added"
                            ) : (
                                <>
                                    <AiOutlinePlus /> Add
                                </>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default FoodItemCard
