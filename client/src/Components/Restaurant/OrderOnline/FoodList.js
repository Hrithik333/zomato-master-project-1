import React from 'react'

// components
import FoodItemCard from './FoodItemCard'

const FoodList = (props) => {

    return (
        <>
            <div>
                <h2 className="bg-white w-full py-2 md:px-2 sticky top-0 z-10 text-xl md:text-2xl font-semibold">{props.name}</h2>
                <div className="flex flex-col gap-3">
                    {
                        props.items.map((item) => (
                            <FoodItemCard key={item} _id={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default FoodList
