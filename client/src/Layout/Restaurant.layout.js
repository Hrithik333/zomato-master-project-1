import React from 'react';

// components
import RestaurantNavbar from '../Components/Navbar/RestaurantNavbar';
import ImageGrid from '../Components/Restaurant/ImageGrid';
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo';

const RestaurantLayout = () => {
    return (
        <>
            <RestaurantNavbar />
            <div className="container mx-auto px-4 lg:px-20 md:my-4">
                <ImageGrid images={[
                    "https://b.zmtcdn.com/data/reviews_photos/985/2265ea26bf223db5e976075635ab8985_1622643290.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                    "https://b.zmtcdn.com/data/reviews_photos/197/18ecba14c5461d7df41c195660304197_1624805739.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
                    "https://b.zmtcdn.com/data/reviews_photos/2fa/10e44ee9283e067814309f977658a2fa_1622958871.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
                    "https://b.zmtcdn.com/data/reviews_photos/afd/037265da4eb2adae82c71a72a21eeafd_1629791462.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
                    "https://b.zmtcdn.com/data/reviews_photos/985/2265ea26bf223db5e976075635ab8985_1622643290.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                ]} />
                <RestaurantInfo
                    name="La Pino'z Pizza"
                    restaurantRating="3.8"
                    deliveryRating="4.1"
                    cuisine="Pizza, Fast Food, Beverages"
                    address="Sardarpura, Jodhpur"
                />
            </div>
        </>
    )
}

export default RestaurantLayout;
