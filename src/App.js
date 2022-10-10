import React from 'react';
import Home from './Home.js';
import Speakers from './Speakers';

export const ConfigContext = React.createContext();

const pageToShow = pageName => {
    if (pageName === 'Home') return <Home></Home>;
    if (pageName === 'Speakers') return <Speakers></Speakers>;
    return <div>Not Found</div>;
};

const configValue = {
    showSignMeUp: true,
    showSpeakerSpeakingDays: true
};

const App = ({ pageName }) => {
    return (
        <ConfigContext.Provider value={configValue}>
            <div>{pageToShow(pageName)}</div>
        </ConfigContext.Provider>
    );
};

export default App;

// coded with lambda syntax
// takes one destructured property

// useContext: context API makes accessing data in components simle and straigtforward. An alternative to passing props manually down complex component trees
// shared context where all data below that level can share data. all routes we ever make share app component, so create context here
// hooks come in when we consume this context
// value passed to provider is any js object
