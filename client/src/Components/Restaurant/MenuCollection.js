import React, { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

const MenuCollection = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState(0);

    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
            {isMenuOpen && (
                <ImageViewer
                    src={props.image}
                    currentIndex={currentImg}
                    disableScroll={true}
                    closeOnClickOutside={true}
                    onClose={closeViewer}
                />
            )}

            <div className="w-32 h-32 flex flex-col md:w-48 md:h-48" onClick={openViewer}>
                <div className="w-full h-full overflow-hidden rounded-lg">
                    <img src={props.image[0]} alt="menu" className="w-full h-full transform transition duration-400 hover:scale-110 rounded-lg" />
                </div>
                <span className="font-medium">{props.menuTitle}</span>
                <p className="text-sm text-gray-500">{props.pages} {props.pages === "1" ? "page" : "pages"}</p>
            </div>
        </>
    )
}

export default MenuCollection
