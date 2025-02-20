import React, { useState } from 'react'
import Player from '@/components/player'

const MusicControls = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  return (
    <div className="fixed bottom-0 left-0 w-full h-16 bg-slate-400 z-50 flex items-center justify-center">
      <Player isPlaying={isPlaying} onPlayPause={handlePlayPause} />
    </div>
  )
}

export default MusicControls
