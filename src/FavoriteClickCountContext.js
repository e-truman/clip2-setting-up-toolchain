import React, { createContext, useContext, useMemo } from 'react';

import { GlobalContext } from './GlobalState';

export const FavoriteClickCountContext = createContext();

export const FavoriteClickCountProvider = ({ children }) => {
    const { incrementFavoriteClickCount } = useContext(GlobalContext);

    // const provider = {
    //   incrementFavoriteClickCount,
    // };

    const provider = useMemo(() => { // use use memo in order to only re-render what neds to be re-rendered
        return { incrementFavoriteClickCount }; 
    }, []); // ony runs on first render

    return (
        <FavoriteClickCountContext.Provider value={provider}>
            {children}
        </FavoriteClickCountContext.Provider>
    );
};