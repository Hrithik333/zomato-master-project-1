import React, { useEffect, useState } from 'react'
import { TiStarFullOutline } from 'react-icons/ti'
import { useDispatch } from 'react-redux';
import dayjs from "dayjs";

// Redux actions
import { getUser } from '../../../Redux/Reducers/User/user.action';

const ReviewCard = (props) => {
    const [user, setUser] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getUser()).then((data) => setUser(data.payload.user.user.user))
        dispatch(getUser()).then((data) => console.log(data))
    }, [])

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
                            <h3 className="text-lg">{user?.fullname}</h3>
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
                        <h5 className="text-regular uppercase">
                            {props.isRestaurantReview ? "Dining" : "Delivery"}
                        </h5>
                        <h5 className="text-gray-500">
                            {dayjs(props.createdAt).format("DD MMM YYYY")}
                        </h5>
                    </div>
                    <div className="w-full">
                        <p className="w-full text-base text-gray-700 font-light">
                            {props.reviewText}
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ReviewCard
