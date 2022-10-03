import react, { useRef } from "react";

const ImageTogglerOnMouseOver = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null)
    return (
        <img onMouseOver={() => {
            imageRef.current.src = secondaryImg // swapping source attribute on mouse in and out. have to access img tag in order to do so, so need useRef. reassigns new image to img by changing src depending on where mouse is
        }} onMouseOut={() => {
            imageRef.current.src = primaryImg
        }}
            src={primaryImg}
            alt="" ref={imageRef} // imageRef assigned to constant upon render. access imageRef.current to get to image attributes
        />
    )
}

export default ImageTogglerOnMouseOver

// components that are url routes go in pages folder. everything else goes in src
// useRef is used to allow access directly to an element in the DOM
// sometimes need to directly acess html element
