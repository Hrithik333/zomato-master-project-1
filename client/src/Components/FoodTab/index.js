import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiFootprintLine } from "react-icons/ri";
import { BiDrink } from "react-icons/bi";
import { IoNutritionOutline } from 'react-icons/io5';
import classnames from "classnames";

const MobileTabs = () => {
    const [allTypes, setAllTypes] = useState([
        {
            id: "delivery",
            icon: <HiOutlineShoppingBag />,
            name: "Delivery",
            isActive: false
        },
        {
            id: "dining",
            icon: <RiFootprintLine />,
            name: "Dining Out",
            isActive: false
        },
        {
            id: "night",
            icon: <BiDrink />,
            name: "Nightlife",
            isActive: false
        },
        {
            id: "nutri",
            icon: <IoNutritionOutline />,
            name: "Nutrition",
            isActive: false
        }
    ])

    const { type } = useParams();

    return (
        <>
            <div className="lg:hidden bg-white p-3 fixed bottom-0 z-10 w-full flex items-center justify-between text-gray-500 border md:justify-evenly">
                {allTypes.map((item) => (
                    <Link to={`/${item.id}`}>
                        <div className={type === item.id ? "flex flex-col items-center relative text-2xl text-zomato-400 " : "flex flex-col items-center text-2xl"}>
                            <div className={type === item.id && "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"} />
                            {item.icon}
                            <h5 className="text-sm">{item.name}</h5>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

const LargeTabs = () => {
    const [allTypes, setAllTypes] = useState([
        {
            id: "delivery",
            imageDefault: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            imageActive: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
            name: "Delivery",
            activeColor: "yellow"
        },
        {
            id: "dining",
            imageDefault: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
            imageActive: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            name: "Dining Out",
            activeColor: "blue"
        },
        {
            id: "night",
            imageDefault: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
            imageActive: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            name: "Nightlife",
            activeColor: "purple"
        },
        {
            id: "nutri",
            imageDefault: "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
            imageActive: "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
            name: "Nutrition",
            activeColor: "yellow"
        },
    ])

    const { type } = useParams();

    return (
        <>
            <div className="hidden lg:flex gap-14 container mx-auto px-20">
                {allTypes.map((item) => (
                    <Link to={`/${item.id}`}>
                        <div className={classnames(
                            "flex items-center gap-3 pb-2 transition duration-700 ease-in-out",
                            { "border-b-2 border-zomato-400": type === item.id }
                        )}>
                            <div className={
                                classnames(
                                    "h-16 w-16 bg-gray-100 rounded-full p-4", { [`bg-${item.activeColor}-100`]: type === item.id }
                                )}
                            >
                                <img
                                    src={type === item.id ? item.imageActive : item.imageDefault}
                                    alt={item.name}
                                    className="w-full h-full"
                                />
                            </div>
                            <h5 className={
                                classnames(
                                    "text-xl text-gray-600 font-semibold",
                                    { "text-zomato-400": type === item.id }
                                )
                            }>{item.name}</h5>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

const FoodTab = () => {
    return (
        <>
            <div>
                <MobileTabs />
                <LargeTabs />
            </div>
        </>
    )
};

export default FoodTab;
