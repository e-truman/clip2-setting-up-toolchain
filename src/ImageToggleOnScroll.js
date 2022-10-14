import React, { useEffect, useRef, useState, useContext } from 'react';
import { GlobalContext } from './GlobalState';

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
    const { imageRerenderIdentifier } = useContext(GlobalContext);
    const [isLoading, setIsLoading] = useState(true);

    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect(); // provides info about size onf an element, and it's position relative to viewport
        return rect.top >= 0 && rect.bottom <= window.innerHeight; // gets size of image rectangle
    };

    const [inView, setInView] = useState(false);

    useEffect(() => {
        setIsLoading(false);
        setInView(isInView());
        window.addEventListener('scroll', scrollHandler); // first parameter of useEffect is a function that gets executed when component mounts
        return () => {
            window.removeEventListener('scroll', scrollHandler); // have to remove listener before component unmounts
        };
    }, [imageRerenderIdentifier]); // second parameter is dependency array. empty array only runs when component first rendered

    const scrollHandler = () => {
        setInView(isInView()); // called every time you scroll. gets info about what image currently in view. sets inView state for each image
    };

    return (
        <img
            src={
                isLoading
                    ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif
                    : inView
                        ? secondaryImg // when we first render the app, we will see the image in view in the larger size if it is in view
                        : primaryImg 
            }
            alt=""
            ref={imageRef}
            width="200"
            height="200"
        />
    );
};

export default ImageToggleOnScroll;



// useEffect called after componet rendered the first time
// used to render anything not directly in return AKA side



