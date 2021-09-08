import React from 'react'

const MenuCollection = (props) => {
    return (
        <>
            <div className="w-32 h-32 flex flex-col md:w-48 md:h-48">
                <div className="w-full h-full overflow-hidden rounded-lg">
                    <img src={props.image} alt="menu" className="w-full h-full transform transition duration-400 hover:scale-110 rounded-lg" />
                </div>
                <span className="font-medium">{props.menuTitle}</span>
                <p className="text-sm text-gray-500">{props.pages} {props.pages === "1" ? "page" : "pages"}</p>
            </div>
        </>
    )
}

export default MenuCollection
