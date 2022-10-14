import React from 'react';
import useSpeakerDataManager from './useSpeakerDataManager';

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const {
        isLoading,
        speakerList,
        favoriteClickCount,
        incrementFavoriteClickCount,
        toggleSpeakerFavorite,
        hasErrored,
        error,
        imageRerenderIdentifier,
        forceImageRerender,
    } = useSpeakerDataManager();

    const provider = { // what useSpeakerDataManager returns
        isLoading,
        speakerList,
        toggleSpeakerFavorite,
        incrementFavoriteClickCount,
        favoriteClickCount,
        hasErrored,
        error,
        imageRerenderIdentifier,
        forceImageRerender,
    };

    return (
        <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
    );
};