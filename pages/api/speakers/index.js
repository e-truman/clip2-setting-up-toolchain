//  
import path from 'path';
import fs, { readFile } from 'fs';

const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); // arificiallt delaying get response to make it seem more real world. for demo purposes only. also gives loading message chance to show

export default async function handler(request, response) {
    // response.status(200).send(JSON.stringify(speakerData, null, 2)) // this creates a JSON file at http://localhost:3000/api/speakers. don't need to get speakers from here if have db.json
    const jsonFile = path.resolve('./', db.json);
    try {
        const readFileData = await readFile(jsonFile);
        await delay(1000)
        const speakers = JSON.parse(readFileData).speakers;
        if(!speakers) {
            response.status(404).send('Error: Request failed with status code 404')
        } else {
            response.setHeader('Content-Type', "application/json")
            response.status(200).send(JSON.stringify(speakers,null,2))
            console.log('GET api/speakers status: 200')
        }
    } catch (e) {
console.log('/api/speakers error:', e) // just writing errors to console if fails
    }
}

// build REST web service that implements GET and PUT
//follow next.js api routes following their conventions
// convention to have api folder in pages folder
//incluse javascript that gets run when user sends a request tho that url by name 9url name the same as name of folder, that is)
// this is for speaker get request
// 