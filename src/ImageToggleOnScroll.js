import react, { useRef, useEffect, useState } from "react";

const ImageTogglerOnScroll = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null)
    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect(); // provides info about size onf an element, and it's position relative to viewport
        return rect.top >= 0 && rect.bottom <= window.innerHeight; // gets size of image rectangle
    }
    const [inView, setInView] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", scrollHandler); // first parameter of useEffect is a function that gets executed when component mounts
        return () =>{
            window.removeEventListener("scroll", scrollHandler) // have to remove listener before component unmounts
        }
    }, []) // second parameter is dependency array. empty array only runs when component first rendered

    const scrollHandler = () => {
        setInView(isInView()); // called every time you scroll. gets info about what image currently in view. sets inView state for each image
    }
    return (
        <img 
            src={inView ? secondaryImg : primaryImg}
            alt="" ref={imageRef} // imageRef assigned to constant upon render. access imageRef.current to get to image attributes
        />
    )
}

export default ImageTogglerOnScroll