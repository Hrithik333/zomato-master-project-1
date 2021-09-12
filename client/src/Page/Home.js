import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// components
import Delivery from '../Components/Delivery';
import Dining from '../Components/Dining';
import Nightlife from '../Components/NightLife';
import Nutrition from '../Components/Nutrition';

// Redux actions
import { getRestaurant } from '../Redux/Reducers/Restaurant/restaurant.action';

const Home = () => {
    const { type } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurant());
    }, [])

    return (
        <div className="my-5">
            {type === "delivery" && <Delivery />}
            {type === "dining" && <Dining />}
            {type === "night" && <Nightlife />}
            {type === "nutri" && <Nutrition />}
        </div>
    )
}

export default Home;
