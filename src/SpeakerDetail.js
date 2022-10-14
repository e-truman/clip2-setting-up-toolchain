import React, {useContext} from 'react';
import ImageToggleOnScroll from './ImageToggleOnScroll';
// // import useSpeakerDataManager from './useSpeakerDataManager';
// import { GlobalContext } from './GlobalState';
import { FavoriteClickCountContext } from './FavoriteClickCountContext';


const SpeakerDetail = React.memo(({ // returns cache of speaker detail component to calling component
    // id,
    // firstName,
    // lastName,
    // favorite,
    // bio,
    speakerRecord,
    onHeartFavoriteHandler,
}) => {
    const { id, firstName, lastName, bio, favorite } = speakerRecord // destructuring from speakerrecord

    const {
        incrementFavoriteClickCount,
    } = useContext(FavoriteClickCountContext);

    return (
        <div className="card col-4 cardmin">
            <ImageToggleOnScroll
                className="card-img-top"
                primaryImg={`/static/speakers/bw/Speaker-${id}.jpeg`}
                secondaryImg={`/static/speakers/Speaker-${id}.jpeg`}
                alt={`${firstName}  ${lastName}`}
            />
            <div className="card-body">
                <h4 className="card-title">
                    <button
                        // data-sessionid={id} // use this id so we have access to which speaker got favorited
                        className={favorite ? 'heartredbutton' : 'heartdarkbutton'} // class is changed for the button every time clicked
                        onClick={(e) => {
                            onHeartFavoriteHandler(e, speakerRecord); // click event switches heart class back and forth
                            incrementFavoriteClickCount();
                        }}
                    />
                    <span>
                        {firstName} {lastName}
                    </span>
                </h4>
                <span>{bio}</span>
            </div>
        </div>
    );
});

export default SpeakerDetail;