import fs from 'fs';

// shows async / nonblocking (do other things while this executes then come back here)
fs.readFile('shows.txt', 'utf8', (err: NodeJS.ErrnoException, shows: string) => {
    // evaluate file read result after callback - when readFile finishes
    if (err) {
        console.log(err);
    }
    else {
        console.log(shows);
    }
});
console.log('WE WATCHED THESE');

// artists
fs.readFile('artists.txt', 'utf8', (err: NodeJS.ErrnoException, artists: string) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(artists);
    }
});
console.log('WE LISTENED TO THESE');