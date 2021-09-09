import classNames from 'classnames';
import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const Tab = (props) => {
    const { id } = useParams();

    return (
        <Link to={`/restaurant/${id}/${props.route}`}>
            <div className={classNames(
                "text-gray-500 font-light",
                {
                    "text-zomato-400 font-medium": props.isActive
                }
            )}>
                <h3 className="text-lg md:text-xl">{props.title}</h3>
            </div>
        </Link>
    )
}

const TabContainer = () => {
    const location = useLocation();

    const currentPath = location.pathname;

    const tabs = [
        {
            title: "Overview",
            route: "overview",
            isActive: currentPath.includes("overview")
        },
        {
            title: "Order Online",
            route: "order-online",
            isActive: currentPath.includes("order-online")
        },
        {
            title: "Reviews",
            route: "reviews",
            isActive: currentPath.includes("reviews")
        },
        {
            title: "Menu",
            route: "menu",
            isActive: currentPath.includes("menu")
        },
        {
            title: "Photos",
            route: "photos",
            isActive: currentPath.includes("photos")
        },
    ]

    return (
        <>
            <div className="tabs flex items-center gap-8 pb-4 border-b-2 md:gap-16 lg:gap-20 overflow-x-scroll">
                {tabs.map((tab) => (
                    <Tab {...tab} key={`123${tab.route}`} />
                ))}
            </div>
        </>
    )
}

export default TabContainer
