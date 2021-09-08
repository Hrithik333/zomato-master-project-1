import React from 'react'
import { TiStarFullOutline } from 'react-icons/ti'

const ReviewCard = () => {
    return (
        <>
            <div className="flex flex-col gap-3 my-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full">
                            <img src="https://b.zmtcdn.com/images/user_avatars/cupcake.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="avatar"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg">Manali Mathur</h3>
                            <small className=" text-gray-500">5 Reviews &bull; 3 Followers</small>
                        </div>
                    </div>
                    <button className="text-zomato-400 border border-zomato-400 px-4 py-3 rounded-md">Follow</button>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-white bg-green-600 font-semibold py-1 px-2 text-xs rounded-lg">
                            3
                            <TiStarFullOutline />
                        </span>
                        <h5 className="text-regular uppercase">Delivery</h5>
                        <h5 className="text-gray-500">3 days ago</h5>
                    </div>
                    <div className="w-full">
                        <p className="w-full text-base text-gray-700 font-light">
                            The size of Pizza was very very small and it was very spicy,3/10 rating of Pizza. The garlic bread was worth it, keep improving,9/10 rating of garlic bread.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ReviewCard
