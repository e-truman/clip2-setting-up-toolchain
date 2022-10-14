import speakersReducer from './speakersReducer';
import axios from 'axios';
import { useEffect, useReducer, useContext } from 'react';

import { InitialSpeakersDataContext } from '../pages/speakers';

const useSpeakerDataManager = () => {
    const initialSpeakersData = useContext(InitialSpeakersDataContext);
    // const [speakerList, setSpeakerList] = useState([]); // use reducer below accomplishes the same thing as this
    const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
        isLoading:true,
        speakerList: [],
        // isLoading: false,// no loading when you use server side rendering and useContext to initialize the array
        // speakerList: initialSpeakersData, // 
    })
    // first parameter is reducer function, second parameter is what ti initialize oor state to
    // const isLoading = stateObject.isLoading
    // const speakerList = stateObject.speakerList // dereferencing the object in the state in reducer is the same as doing this

    // const [isLoading, setIsLoading] = useState(true); // after refactoring, get this from useReducer

    // when use dispatch keyword, speakersReducer is called. changed to dispatch from setSpeakerList

    const toggleSpeakerFavorite = (speakerRecord) => {
        const updateData = async function () {
            axios.put(`/api/speakers/${speakerRecord.id}`, { ...speakerRecord, favorite: !speakerRecord.favorite })
            speakerRecord.favorite === true ?
                dispatch({ type: "unfavorite", id: speakerRecord.id }) :
                dispatch({ type: "favorite", id: speakerRecord.id })
        };
        updateData();
    }


useEffect(() => {
    // setIsLoading(true); // makes sure loading status set to true // can remove from code after including isLoading state with reducer
    // new Promise(function (resolve) {
    //     setTimeout(function () {
    //         resolve();
    //     }, 1000); // reates one second delay, returns a promise
    // }).then(() => {
    //     // setIsLoading(false)
    //     // const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => { // use reducer filters now
    //     //     return (speakingSaturday && sat) || (speakingSunday && sun);
    //     // });
    //     // setSpeakerList(speakerListServerFilter); // after loads, sets speaker list to speaker data
    //     // setIsLoading(false); // sets loading to false

    //     dispatch({
    //         type: "setSpeakerList",
    //         data: SpeakerData
    //     })
    // });

    // don't need our timer if using axios
    const fetchData = async function () { // modifying our hook to get data from REST service
        let result = await axios.get('/api/speakers'); //rest get url
        dispatch({ type: 'setSpeakerList', data: result.data })
    }
    fetchData();
    return () => {
        console.log('cleanup'); // cleanup function would go here, we don't need that
    };
}, []); // only runs once
// return { isLoading, speakerList, dispatch };
return { isLoading, speakerList, toggleSpeakerFavorite }; // handled dispatch in toggleSpeakerFavorite function to make code easier to read. hard to understand what dispatch means
}

export default useSpeakerDataManager

// npm install axios
// server side rendering good fro SEO because crawlers guaranteed to see all crawlers on your page
// loads faster becasue user doesn't have to wait for use effect to run to see data
// possibility of overloading server is downside