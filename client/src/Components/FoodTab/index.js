import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiFootprintLine } from "react-icons/ri";
import { BiDrink } from "react-icons/bi";
import { IoNutritionOutline } from 'react-icons/io5';


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
                {allTypes.map((items) => (
                    <Link to={`/${items.id}`}>
                        <div className={type === items.id ? "flex flex-col items-center relative text-2xl text-zomato-400 " : "flex flex-col items-center text-2xl"}>
                            <div className={type === items.id && "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"} />
                            {items.icon}
                            <h5 className="text-sm">{items.name}</h5>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

const LargeTabs = () => {
    return (
        <>
            <div className="hidden lg:flex gap-14 container mx-auto px-20">
                <div className="flex items-center gap-3">
                    <div className="h-16 w-16 bg-gray-100 rounded-full p-4">
                        <img
                            src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png" alt="delivery"
                            className="w-full h-full"
                        />
                    </div>
                    <h5 className="text-xl text-gray-600 font-semibold">Delivery</h5>
                </div>
                <div className="flex items-center gap-3">
                    <div className="h-16 w-16 bg-gray-100 rounded-full p-4">
                        <img
                            src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" alt="delivery"
                            className="w-full h-full"
                        />
                    </div>
                    <h5 className="text-xl text-gray-600 font-semibold">Dining Out</h5>
                </div>
                <div className="flex items-center gap-3">
                    <div className="h-16 w-16 bg-gray-100 rounded-full p-4">
                        <img
                            src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" alt="delivery"
                            className="w-full h-full"
                        />
                    </div>
                    <h5 className="text-xl text-gray-600 font-semibold">Nightlife</h5>
                </div>
                <div className="flex items-center gap-3">
                    <div className="h-16 w-16 bg-gray-100 rounded-full p-4">
                        <img
                            src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png" alt="delivery"
                            className="w-full h-full"
                        />
                    </div>
                    <h5 className="text-xl text-gray-600 font-semibold">Nutrition</h5>
                </div>
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
