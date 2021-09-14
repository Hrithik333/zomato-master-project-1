import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

// components
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard';
import AddReviewCard from '../../Components/Restaurant/Reviews/AddReviewCard';

// Redux actions
import { getReviews } from '../../Redux/Reducers/Reviews/review.action';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (reduxState) {
            dispatch(getReviews(reduxState?._id)).then((data) => setReviews(data.payload.reviews))
        }
    }, [reduxState, dispatch]);

    return (
        <>
            <div className="relative flex flex-col md:gap-5 md:flex-row">
                <div className="w-full md:w-8/12 flex flex-col gap-3">
                    <div className="md:hidden">
                        <AddReviewCard />
                    </div>
                    {reviews.map((review) => <ReviewCard key={review._id} {...review} />)}
                </div>
                <aside
                    style={{ height: "fit-content" }}
                    className=" hidden bg-white p-4 shadow-md rounded-xl md:flex md:w-2/5 items-start sticky top-2 flex-col gap-3"
                >
                    <AddReviewCard />
                </aside>
            </div>
        </>
    )
}

export default Reviews
