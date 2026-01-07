"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// shows async / nonblocking (do other things while this executes then come back here)
fs_1.default.readFile('shows.txt', 'utf8', (err, shows) => {
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
fs_1.default.readFile('artists.txt', 'utf8', (err, artists) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(artists);
    }
});
console.log('WE LISTENED TO THESE');
