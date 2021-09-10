import React, { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

// components
import PhotosCollection from '../../Components/Restaurant/PhotosCollection';

const Photos = () => {
    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/pictures/2/18696782/b6d582eb9517edb85e73a779c818f5d6.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/688/8bad8ad275e358d2cf079bf2922fc688_1552665827.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/f6f/afe2173bc87c2716a6a031c79e822f6f_1555921779.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/d28/c18b0cb441eba779b446ea0b606dad28_1552665829.jpg"
    ]);
    const [isPhotoOpen, setIsPhotoOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState(0);

    const closeViewer = () => setIsPhotoOpen(false);
    const openViewer = () => setIsPhotoOpen(true);

    return (
        <>
            {isPhotoOpen && (
                <ImageViewer
                    src={photos}
                    currentIndex={currentImg}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeViewer}
                />
            )}

            <div className="flex flex-wrap gap-3">
                {photos.map((photo) => (
                    <PhotosCollection image={photo} openViewer={openViewer} />
                ))}
            </div>
        </>
    )
}

export default Photos