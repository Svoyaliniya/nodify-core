// import all required modules
import os from 'os'

export function getCurrentOS() {
  /* 
  This function returns the path to the yt-dlp executable based on the current operating system and architecture.
  
  windows - win32
  macOS - darwin
  linux - linux( x64, arm, arm64 )
  */

  const platform = os.platform()
  const arch = os.arch()

  if (platform === 'win32') {
    return 'yt-dlp_win.exe'

  } else if (platform === 'darwin') {
    return 'yt-dlp_macos'

  } else if (platform === 'linux') {
    if (arch === 'x64') {
      return 'yt-dlp_linux'
    } else if (arch === 'arm') {
      return 'yt-dlp_linux_armv7l'
    } else if (arch === 'arm64') {
      return 'yt-dlp_linux_aarch64'
    } else {
      throw new Error('❌ Unsupported Linux architecture')
    }
    
  } else {
    throw new Error('❌ Unsupported OS')
  }
}
