import react from "react";
import ImageTogglerOnMouseOver from "../src/ImageTogglerOnMouseOver";

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageTogglerOnMouseOver primaryImg="/static/images/thumbs/TeaThumb.jpg" secondaryImg="/static/images/thumbs/DistanceOfTheMoonThumb.jpg" alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageTogglerOnMouseOver primaryImg="/static/images/thumbs/LilyThumb.jpg" secondaryImg="/static/images/thumbs/FoxThumb.jpg" alt="" />
        </div>
    );
};

export default ImageChangeOnMouseOver;




//with next.js framework, the name of our file become the url route
// in Next.js, anything in the public folder is available to our running app. this is where we can out our images. Connvention is to save them in a static folder