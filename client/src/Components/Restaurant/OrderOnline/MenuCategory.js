import classNames from 'classnames';
import React from 'react';

const MenuCategory = (props) => {
    return (
        <>
            <div className={classNames("cursor-pointer", {
                "text-zomato-400 bg-zomato-50 border-r-4 border-zomato-400 py-1 px-2": props.isActive
            })}

            >
                <h3
                    onClick={props.onClickHandler}
                    id={props.name}
                >
                    {props.name} ({props.items.length})
                </h3>
            </div>
        </>
    )
}

export default MenuCategory;
