import React, { useEffect, useState, useContext, useReducer, useCallback } from 'react';

import { Header } from './Header';
import { Menu } from './Menu';
import SpeakerData from './SpeakerData';
import SpeakerDetail from './SpeakerDetail';
import { ConfigContext } from './App';
import speakersReducer from './speakersReducer';

const Speakers = ({ }) => {
    const [speakingSaturday, setSpeakingSaturday] = useState(true);
    const [speakingSunday, setSpeakingSunday] = useState(true);

    // const [speakerList, setSpeakerList] = useState([]); // use reducer below accomplishes the same thing as this
    const [speakerList, dispatch] = useReducer(speakersReducer, []) // first parameter is reducer function, second parameter is what ti initialize oor state to
    const [isLoading, setIsLoading] = useState(true);

    // when use dispatch keyword, speakersReducer is called. changed to dispatch from setSpeakerList
    const context = useContext(ConfigContext); // gets reference to context

    useEffect(() => {
        setIsLoading(true); // makes sure loading status set to true
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, 1000); // reates one second delay, returns a promise
        }).then(() => {
            setIsLoading(false)
            const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => {
                return (speakingSaturday && sat) || (speakingSunday && sun);
            });
            // setSpeakerList(speakerListServerFilter); // after loads, sets speaker list to speaker data
            // setIsLoading(false); // sets loading to false

            dispatch({
                type: "setSpeakerList",
                data: speakerListServerFilter
            })
        });

        return () => {
            console.log('cleanup'); // cleanup function would go here, we don't need that
        };
    }, []); // only runs once

    const handleChangeSaturday = () => {
        setSpeakingSaturday(!speakingSaturday);
    };

    const handleChangeSunday = () => {
        setSpeakingSunday(!speakingSunday);
    };
    const speakerListFiltered = isLoading
        ? []
        : speakerList
            .filter(
                ({ sat, sun }) =>
                    (speakingSaturday && sat) || (speakingSunday && sun),
            )
            .sort(function (a, b) {
                if (a.firstName < b.firstName) {
                    return -1;
                }
                if (a.firstName > b.firstName) {
                    return 1;
                }
                return 0;
            });

    const heartFavoriteHandler = useCallback((e, favoriteValue) => {
        e.preventDefault();
        const sessionId = parseInt(e.target.attributes['data-sessionid'].value); // this is how we get the id of the speaker favorited

        dispatch({
            type: favoriteValue === true ? "favorite" : "unfavorite",
            sessionId
        })
        // setSpeakerList(
        //     speakerList.map((item) => {
        //         if (item.id === sessionId) {
        //             return { ...item, favorite: favoriteValue }; //overwrites favorite value in SpeakerData
        //         }
        //         return item;
        //     }),
        // );
    },[]); //return of useCallback caches function value

    if (isLoading) return <div>Loading...</div> // loading message before useEffect runs

    return (
        <div>
            <Header />
            <Menu />
            <div className="container">
                <div className="btn-toolbar margintopbottom5 chekbox-bigger">
                    {context.showSpeakerSpeakingDays === false ? null : (
                        <div className="hide">
                            <div className="form-check-inline">
                                <label className="form-check-label">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        onChange={handleChangeSaturday}
                                        checked={speakingSaturday}
                                    />
                                    Saturday Speakers
                                </label>
                            </div>
                            <div className="form-check-inline">
                                <label className="form-check-label">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        onChange={handleChangeSunday}
                                        checked={speakingSunday}
                                    />
                                    Sunday Speakers
                                </label>
                            </div>
                        </div>
                    )}
                </div>
                <div className="row">
                    <div className="card-deck">
                        {speakerListFiltered.map(
                            ({ id, firstName, lastName, bio, favorite }) => {
                                return (
                                    <SpeakerDetail
                                        // takes in speaker detain properties and passes them as attributes
                                        key={id}
                                        id={id}
                                        favorite={favorite}
                                        firstName={firstName}
                                        lastName={lastName}
                                        bio={bio}
                                        onHeartFavoriteHandler={heartFavoriteHandler}
                                    />
                                );
                            },
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speakers;