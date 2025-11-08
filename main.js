// main.js — Core module exports for nodify-core

// Import required functions from local modules
import { searchSongs } from './func/genius-api-part.js'
import { searchAlbums, getPlaylistByUrl, getTrackMetadata, getTracksFromAlbum } from './func/spotify-api-module.js'
import { downloadTrack, downloadAlbum } from './func/yt-dlp-part.js'

export {
    // All exported functions with detailed descriptions:

    searchSongs,            // Search for songs | (query, limit=10, showLogs=true)
    
    searchAlbums,           // Search for albums | (query, limit=10, showLogs=true)
    getPlaylistByUrl,       // Get playlist details from a Spotify URL | (query, showLogs=true)
    getTrackMetadata,       // Get metadata for a track (query)
    getTracksFromAlbum,     // Get all tracks from an album | (query, showLogs=true)
    
    downloadTrack,          // Download a single track (query
    downloadAlbum           // Download all tracks from an album | (query, type=false)
}