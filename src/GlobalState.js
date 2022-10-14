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
    } = useSpeakerDataManager();

    const provider = { // what useSpeakerDataManager returns
        isLoading,
        speakerList,
        toggleSpeakerFavorite,
        incrementFavoriteClickCount,
        favoriteClickCount,
    };

    return (
        <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
    );
};