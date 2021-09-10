import React, { useState } from 'react'

// components
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard';
import AddReviewCard from '../../Components/Restaurant/Reviews/AddReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState(["", "", ""]);

    return (
        <>
            <div className="relative flex flex-col md:gap-5 md:flex-row">
                <div className="w-full md:w-8/12 flex flex-col gap-3">
                    <div className="md:hidden">
                        <AddReviewCard />
                    </div>
                    {reviews.map((review) => <ReviewCard {...review} />)}
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
