import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import ImageViewer from 'react-simple-image-viewer';

// components
import PhotosCollection from '../../Components/Restaurant/PhotosCollection';

// redux action
import { getImage } from '../../Redux/Reducers/Image/image.action';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const [isPhotoOpen, setIsPhotoOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState(0);

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (reduxState) {
            dispatch(getImage(reduxState?.photos)).then((data) => {
                const images = [];
                data.payload.image.images.map(({ location }) => images.push(location));
                setPhotos(images);
            });
        }
    }, [reduxState, dispatch]);

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