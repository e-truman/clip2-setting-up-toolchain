import React, { useEffect, useState } from 'react';

import { Header } from './Header';
import { Menu } from './Menu';
import SpeakerData from './SpeakerData';
import SpeakerDetail from './SpeakerDetail';

const Speakers = ({ }) => {
    const [speakingSaturday, setSpeakingSaturday] = useState(true);
    const [speakingSunday, setSpeakingSunday] = useState(true);

    const [speakerList, setSpeakerList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true); // makes sure loading status set to true
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, 1000); // reates one second delay, returns a promise
        }).then(() => {
            setSpeakerList(SpeakerData); // after loads, sets speaker list to speaker data
            setIsLoading(false); // sets loading to falsex
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

    const heartFavoriteHandler = (e, favoriteValue) => {
        e.preventDefault();
        const sessionId = parseInt(e.target.attributes['data-sessionid'].value); // this is how we get the id of the speaker favorited
        setSpeakerList(
            speakerList.map((item) => {
                if (item.id === sessionId) {
                    return { ...item, favorite: favoriteValue }; //overwrites favorite value in SpeakerData
                }
                return item;
            }),
        );
    };

    if (isLoading) return <div>Loading...</div>; // loading message before useEffect runs

    return (
        <div> 
            <Header />
            <Menu />
            <div className="container">
                <div className="btn-toolbar margintopbottom5 chekbox-bigger">
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