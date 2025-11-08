// import all required modules
import { promisify } from 'util'
import { getCurrentOS } from './get-os.js'
import { findUrl } from './yt-search-module.js'
import { writeTags } from './node-id3-module.js'
import { getTracksFromAlbum, getTracksFromUserAlbum } from './spotify-api-module.js'

import { fileURLToPath } from 'url'
import path from 'path'
import { exec as execCallback } from 'child_process'

const execAsync = promisify(execCallback)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Пути
const ytdlpPath = path.resolve(__dirname, `../yt-dlp/${getCurrentOS()}`)
const ffmpegPath = path.resolve(__dirname, '../node_modules/ffmpeg-static/ffmpeg')

export async function downloadTrack(query) {
  /*
  This function downloads a track using yt-dlp based on a query string.

  This function uses: getCurrentOS, findUrl, writeTags.
  */

  var url = await findUrl(query)
  if (!url) {
    url = `ytsearch:${query}`
  }

  const command = `"${ytdlpPath}" -x --audio-format mp3 --ffmpeg-location "${ffmpegPath}" -o "track.%(ext)s" "${url}"`

  try {
    await execAsync(command)
    await writeTags(query)
  } catch (err) {
    console.error(err.message)
  }
}

export async function downloadAlbum(query, type) {
  /*
  This function downloads an album or playlist using yt-dlp based on a query string.

  This function takes 2 arguments:
    1. query – the search input (can be an album name or playlist URL)
    2. type – set to false to install an album, or true to install a playlist

  This function uses: getTracksFromAlbum, getTracksFromUserAlbum, downloadTrack.
  */

  let tracks = [];
  if (!type) {
    tracks = await getTracksFromAlbum(query)
  } else {
    tracks = await getTracksFromUserAlbum(query)
  }
  
  if (!tracks || !tracks.length) {
    console.log("❌ No tracks found for this album.")
    return
  }

  for (const track of tracks) {
    const trackQuery = `${track.title} - ${track.artist}`
    await downloadTrack(trackQuery)
  }
}