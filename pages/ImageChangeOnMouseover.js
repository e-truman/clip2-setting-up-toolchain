import react from "react";
import ImageTogglerOnMouseOver from "../src/ImageTogglerOnMouseOver";

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageTogglerOnMouseOver primaryImg="/static/images/TeaFull.jpg" secondaryImg="/static/images/TheDistanceOfTheMoonFull.jpg" alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageTogglerOnMouseOver primaryImg="/static/images/LilyFull.jpg" secondaryImg="/static/images/FoxFull.jpg" alt="" />
        </div>
    );
};

export default ImageChangeOnMouseOver;




//with next.js framework, the name of our file become the url route
// in Next.js, anything in the public folder is available to our running app. this is where we can out our images. Connvention is to save them in a static folder