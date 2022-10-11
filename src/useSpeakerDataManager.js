import speakersReducer from "./speakersReducer";
import SpeakerData from "./SpeakerData";
import { useEffect, useReducer } from "react";

const useSpeakerDataManager = () => {
    // const [speakerList, setSpeakerList] = useState([]); // use reducer below accomplishes the same thing as this
    const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, { isLoading: true, speakerList: [] }) // first parameter is reducer function, second parameter is what ti initialize oor state to
    // const isLoading = stateObject.isLoading
    // const speakerList = stateObject.speakerList // dereferencing the object in the state in reducer is the same as doing this

    // const [isLoading, setIsLoading] = useState(true); // after refactoring, get this from useReducer

    // when use dispatch keyword, speakersReducer is called. changed to dispatch from setSpeakerList

    useEffect(() => {
        // setIsLoading(true); // makes sure loading status set to true // can remove from code after including isLoading state with reducer
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, 1000); // reates one second delay, returns a promise
        }).then(() => {
            // setIsLoading(false)
            // const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => { // use reducer filters now
            //     return (speakingSaturday && sat) || (speakingSunday && sun);
            // });
            // setSpeakerList(speakerListServerFilter); // after loads, sets speaker list to speaker data
            // setIsLoading(false); // sets loading to false

            dispatch({
                type: "setSpeakerList",
                data: SpeakerData
            })
        });

        return () => {
            console.log('cleanup'); // cleanup function would go here, we don't need that
        };
    }, []); // only runs once
    return { isLoading, speakerList, dispatch };
}

export default useSpeakerDataManager