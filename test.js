// test.js — Script for testing functions

// Import required functions from local modules
import { searchSongs } from './func/genius-api-part.js'
import { searchAlbums, getPlaylistByUrl, getTrackMetadata, getTracksFromAlbum } from './func/spotify-api-module.js'
import { downloadTrack, downloadAlbum } from './func/yt-dlp-part.js'

// Your search query (can be artist, song, album, or playlist URL)
const query = "Enter your search query here..."

;(async () => {
    // Uncomment the lines below to test different functionalities:

    // await searchSongs(query, 10, true)      // Search for songs

    // await searchAlbums(query, 10, true)     // Search for albums
    // await getPlaylistByUrl(query, true)     // Get playlist details from a Spotify URL
    // await getTrackMetadata(query)           // Get metadata for a track
    // await getTracksFromAlbum(query, true)   // Get all tracks from an album

    await downloadTrack(query)               // Download a single track

    // await downloadAlbum(query, false)     // Download all tracks from an album
    // await downloadAlbum(query, true)      // Download all tracks from a Spotify playlist
})()
