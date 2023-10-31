"use strict";
function makeAlbum(artist, title, numTracks) {
    return { artist, title, numTracks };
}
const album1 = makeAlbum("Taylor Swift", "1989");
const album2 = makeAlbum("Adele", "21");
const album3 = makeAlbum("Ed Sheeran", "Divide", 16);
console.log(album1); // { artist: 'Taylor Swift', title: '1989' }
console.log(album2); // { artist: 'Adele', title: '21' }
console.log(album3); // { artist: 'Ed Sheeran', title: 'Divide', numTracks: 16 }
