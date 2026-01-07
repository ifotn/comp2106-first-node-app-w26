// import the filesystem lib to read text files
import fs from 'fs';

const shows: string = fs.readFileSync('shows.txt', 'utf8');
console.log(shows);
console.log('WE WATCHED THESE');

const artists: string = fs.readFileSync('artists.txt', 'utf8');
console.log(artists);
console.log('WE LISTENED TO THESE');
