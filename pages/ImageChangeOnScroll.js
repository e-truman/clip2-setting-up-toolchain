import react, {useState, useEffect} from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
    const [currentImage, setCurrentImage] = useState("");
    const [mouseEventCount, setMouseEventCount] = useState(0);
    const images = [1124, 1269, 1530, 10803, 10808]

    useEffect(()=>{
        window.document.title= `image: ${currentImage}` // sets browswer tab title
        console.log(`setting title to ${currentImage}`)
    },[currentImage]); // prevents from calling the same browser tab title if no change. otherwise updates multiple times

    return (
        <div>
            <span>Mouse Event Count: {mouseEventCount}</span>
            {images.map((image) => {
                return (
                    <div key={image}
                    onMouseOver={()=>{
                        setCurrentImage(image)
                        setMouseEventCount(mouseEventCount +1)
                        console.log(`onMouseOver:${image}`)
                    }}>
                        <ImageToggleOnScroll primaryImg={`/static/speakers/bw/Speaker-${image}.jpeg`} secondaryImg={`/static/speakers/Speaker-${image}.jpeg` } alt="" />
                    </div>
                )
            })}
        </div>
    );
};

export default ImageChangeOnScroll;