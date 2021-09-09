import React from 'react';

// components
import FloatingMenuButton from '../../Components/Restaurant/OrderOnline/FloatingMenuButton';
import MenuListContainer from '../../Components/Restaurant/OrderOnline/MenuListContainer';

const OrderOnline = () => {
    return (
        <>
            <div className="w-full">
                <aside className="hidden md:flex flex-col gap-3 border-r border-gray-400 w-1/4">
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                </aside>
                <div className="w-full md:w-3/4">

                </div>
            </div>
            <FloatingMenuButton />
        </>
    )
}

export default OrderOnline;
