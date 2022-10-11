import React, { useEffect, useState, useContext, useReducer, useCallback, useMemo } from 'react';

import { Header } from './Header';
import { Menu } from './Menu';
import SpeakerDetail from './SpeakerDetail';
import { ConfigContext } from './App';
import useSpeakerDataManager from './useSpeakerDataManager';

const Speakers = ({ }) => {
    const [speakingSaturday, setSpeakingSaturday] = useState(true);
    const [speakingSunday, setSpeakingSunday] = useState(true);
    const context = useContext(ConfigContext); // gets reference to context

const {isLoading, speakerList, dispatch} = useSpeakerDataManager();

    const handleChangeSaturday = () => {
        setSpeakingSaturday(!speakingSaturday);
    };

    const handleChangeSunday = () => {
        setSpeakingSunday(!speakingSunday);
    };
    // const speakerListFiltered = isLoading  // speakerListFilter before optimizing with useMemo
    //     ? []
    //     : speakerList
    //         .filter(
    //             ({ sat, sun }) =>
    //                 (speakingSaturday && sat) || (speakingSunday && sun),
    //         )
    //         .sort(function (a, b) {
    //             if (a.firstName < b.firstName) {
    //                 return -1;
    //             }
    //             if (a.firstName > b.firstName) {
    //                 return 1;
    //             }
    //             return 0;
    //         });
    const newSpeakerList = useMemo( // takes two parameters. 1.) the function we want to memoize (only update if it changes from cached value)
        () =>
            speakerList
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
                }),
        [speakingSaturday, speakingSunday, speakerList], //second parameter is dependency array similar to useEffect. if any of these changes, useMemo runs the function again and caches that value
    );


    const speakerListFiltered = isLoading // had to filter before conditionally calling if isLoading because hooks can't be called conditionally
        ? []
        : newSpeakerList

    const heartFavoriteHandler = useCallback((e, favoriteValue) => {
        e.preventDefault();
        const sessionId = parseInt(e.target.attributes['data-sessionid'].value); // this is how we get the id of the speaker favorited

        dispatch({
            type: favoriteValue === true ? "favorite" : "unfavorite",
            id: sessionId
        })
        // setSpeakerList(
        //     speakerList.map((item) => {
        //         if (item.id === sessionId) {
        //             return { ...item, favorite: favoriteValue }; //overwrites favorite value in SpeakerData
        //         }
        //         return item;
        //     }),
        // );
    }, []); //return of useCallback caches function value

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