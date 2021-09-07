import classNames from 'classnames';
import React from 'react'

const InfoButtons = (props) => {
    return (
        <>
            <button className={classNames(
                "flex items-center gap-3 border border-gray-500 px-4 py-2 rounded-lg",
                {
                    "bg-zomato-400 text-white border border-zomato-400": props.isActive
                }
            )}>
                {props.children}
            </button>
        </>
    )
}

export default InfoButtons
