import react from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
    const images = ["Lily", "Tea", "Fox", "DistanceOfTheMoon", "Daisies", "Birdskull", "Buttercup"]
    return (
        <div>
            {images.map((image) => {
                return (
                    <div key={image}>
                        <ImageToggleOnScroll primaryImg={`/static/images/thumbs/${image}Thumb.jpg`} secondaryImg={`/static/images/fulls/${image}Full.jpg`} alt="" />
                    </div>
                )
            })}
        </div>
    );
};

export default ImageChangeOnScroll;