import React from 'react';
import { AiOutlineCompass } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';

// components
import FloatingMenuButton from '../../Components/Restaurant/OrderOnline/FloatingMenuButton';
import FoodItemCard from '../../Components/Restaurant/OrderOnline/FoodItemCard';
import FoodList from '../../Components/Restaurant/OrderOnline/FoodList';
import MenuListContainer from '../../Components/Restaurant/OrderOnline/MenuListContainer';

const OrderOnline = () => {
    return (
        <>
            <div className="w-full h-screen flex">
                <aside className="hidden md:flex flex-col gap-3 border-r border-gray-200 overflow-y-scroll h-screen w-1/4">
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                </aside>
                <div className="w-full px-3 md:w-3/4">
                    <div className="mb-4 pl-3">
                        <h2 className="text-xl md:text-2xl font-semibold">Order Online</h2>
                        <h4 className="flex items-center gap-2 font-light text-gray-500">
                            <AiOutlineCompass /> Live track your order | <BiTime /> 45 min
                        </h4>
                    </div>

                    <section className="h-screen overflow-y-scroll flex flex-col gap-3 md:gap-5">
                        <FoodList
                            title="Recommended"
                            items={[
                                {
                                    image: "https://b.zmtcdn.com/data/dish_photos/5cb/97b3ae9bc4d000d22a42a6a41ea795cb.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*",
                                    title: "Margherita Pizza",
                                    price: "110",
                                    rating: 3,
                                    description: "Say cheese"
                                },
                                {
                                    image: "https://b.zmtcdn.com/data/dish_photos/5cb/97b3ae9bc4d000d22a42a6a41ea795cb.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*",
                                    title: "Margherita Pizza",
                                    price: "110",
                                    rating: 3,
                                    description: "Say cheese"
                                },
                                {
                                    image: "https://b.zmtcdn.com/data/dish_photos/5cb/97b3ae9bc4d000d22a42a6a41ea795cb.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*",
                                    title: "Margherita Pizza",
                                    price: "110",
                                    rating: 3,
                                    description: "Say cheese"
                                },
                            ]}
                        />
                        <FoodList
                            title="Pizzas"
                            items={[
                                {
                                    image: "https://b.zmtcdn.com/data/dish_photos/5cb/97b3ae9bc4d000d22a42a6a41ea795cb.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*",
                                    title: "Margherita Pizza",
                                    price: "110",
                                    rating: 3,
                                    description: "Say cheese"
                                },
                                {
                                    image: "https://b.zmtcdn.com/data/dish_photos/5cb/97b3ae9bc4d000d22a42a6a41ea795cb.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*",
                                    title: "Margherita Pizza",
                                    price: "110",
                                    rating: 3,
                                    description: "Say cheese"
                                },
                                {
                                    image: "https://b.zmtcdn.com/data/dish_photos/5cb/97b3ae9bc4d000d22a42a6a41ea795cb.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*",
                                    title: "Margherita Pizza",
                                    price: "110",
                                    rating: 3,
                                    description: "Say cheese"
                                },
                            ]}
                        />
                        <FoodList
                            title="Beverages"
                            items={[
                                {
                                    image: "https://b.zmtcdn.com/data/dish_photos/5cb/97b3ae9bc4d000d22a42a6a41ea795cb.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*",
                                    title: "Margherita Pizza",
                                    price: "110",
                                    rating: 3,
                                    description: "Say cheese"
                                },
                                {
                                    image: "https://b.zmtcdn.com/data/dish_photos/5cb/97b3ae9bc4d000d22a42a6a41ea795cb.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*",
                                    title: "Margherita Pizza",
                                    price: "110",
                                    rating: 3,
                                    description: "Say cheese"
                                },
                                {
                                    image: "https://b.zmtcdn.com/data/dish_photos/5cb/97b3ae9bc4d000d22a42a6a41ea795cb.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*",
                                    title: "Margherita Pizza",
                                    price: "110",
                                    rating: 3,
                                    description: "Say cheese"
                                },
                            ]}
                        />

                    </section>

                </div>
            </div>
            <FloatingMenuButton />
        </>
    )
}

export default OrderOnline;
