import React from 'react'

const FoodItem = (props) => {
    const incrementQnty = () => {
        return props.quantity + 1;
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <h5>{props.name}</h5>
                <div className="flex flex-col items-end gap-1">
                    <small>₹{parseInt(props.price) * parseInt(props.quantity)}</small>
                    <div className="px-2 py-1 bg-zomato-400 text-white rounded flex items-center gap-4 w-full">
                        <button>-</button>
                        <button>1</button>
                        <small onClick={incrementQnty}>+</small>
                    </div>
                </div>
            </div>
            <hr className="my-1" />
        </>
    )
}

export default FoodItem