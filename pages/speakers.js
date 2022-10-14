import App from '../src/App';
import path from 'path';
import fs from 'fs';
import React from 'react';

export const InitialSpeakersDataContext = React.createContext();

export async function getStaticProps() { //
  const { promisify } = require('util');
  const readFile = promisify(fs.readFile); //reference to readfile comes from reference to promisify
  const jsonFile = path.resolve('./', 'db.json'); //path to json filr
  let initialSpeakersData;
  try {
    const readFileData = await readFile(jsonFile);
    initialSpeakersData = JSON.parse(readFileData).speakers; // parse it in to js array
  } catch (e) {
    console.log('/api/speakers error:', e); // if error log error
  }

  return { revalidate: 1, props: { initialSpeakersData } }; // return initial speaker data as property of props
}

function speakers({ initialSpeakersData }) { //we can now access as a receiving prop in client sides
  return(
    <InitialSpeakersDataContext.Provider value={initialSpeakersData}>
      <App pageName="Speakers" />
    </InitialSpeakersDataContext.Provider>
  );
}

export default speakers;



// // special exported functiond inside of pages will run exclusively on the Node server
// // what's returned from exported functions is serialized and passed to client components as receiving props
// //getServerSideProps is meant to resolve all external services that provide data for current page route
// // DB.json simulates external REST service on our Node server