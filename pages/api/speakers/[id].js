//import speakerData from '../../../src/SpeakerData';

import path from 'path';
import fs from 'fs';
import next from 'next';

const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
    const method = req?.method; // pulling out from request parameters the method passed in
    const id = parseInt(req?.query.id); // query method id
    const recordFromBody = req?.body; // body of post. passed in record value to update

    if (method != 'PUT') { // if request is not a put, return an error
        res.send(501).send(`Method ${method} not implemented`);
    } else { // reading the speakers is the same as a GET
        const jsonFile = path.resolve('./', 'db.json');
        try {
            const readFileData = await readFile(jsonFile);
            await delay(1000);
            const speakers = JSON.parse(readFileData).speakers;
            if (!speakers) {
                res.status(404).send('Error: Request failed with status code 404');
            } else {
                const newSpeakersArray = speakers.map(function (rec) { // finding the record that needs to be updated
                    return rec.id === id ? recordFromBody : rec; // replace that one with the one sent back to us with th request
                });
                writeFile( // write new records updated back to file system
                    jsonFile,
                    JSON.stringify({ speakers: newSpeakersArray }, null, 2),
                );
                res.status(200).json(recordFromBody); // return updated record. a PUT needs a response
                console.log(`PUT /api/speakers/${id} status: 200`);
            }
        } catch (e) {
            console.log(`/api/speakers/${id} error:`, e);
        }
    }
}

//convention for next.js api routing is to create route file name with [id] in square brackets. all requests coming from speakers/id get routed through this file. a put request would have to have an id