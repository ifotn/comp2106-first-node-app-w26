"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import the filesystem lib to read text files
const fs_1 = __importDefault(require("fs"));
const shows = fs_1.default.readFileSync('shows.txt', 'utf8');
console.log(shows);
console.log('WE WATCHED THESE');
const artists = fs_1.default.readFileSync('artists.txt', 'utf8');
console.log(artists);
console.log('WE LISTENED TO THESE');
