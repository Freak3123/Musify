import React from "react"
import Image from "next/image"

type MusicCardProps = {
  imageUrl?: string
  name?: string
  singer?: string
  duration?: string
}

export function BigMusicCard({ 
  imageUrl = "/music_cover.jpg", // Default image URL (ensure this exists in the public folder)
  name = "Unknown Track",
  singer = "Unknown Artist",
 }: MusicCardProps) {
  return (
    <div className="w-28 rounded-lg overflow-hidden shadow-lg hover:shadow-lg transition-shadow duration-300 bg-white">
      {/* Image */}
      <div className="relative h-28 w-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Song Details */}
      <div className="p-4">
        <h3 className="text-md font-semibold truncate">{name}</h3>
        <p className="text-xs text-gray-600 truncate">{singer}</p>
      </div>
    </div>
  )
}

export function MusicCard({
  imageUrl = "/music_cover.jpg", // Default image URL (ensure this exists in the public folder)
  name = "Unknown Track",
  singer = "Unknown Artist",
  duration = "00:00",
}: MusicCardProps) {
  return (
    <div className="flex overflow-hidden items-center p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Left: Music Image */}
      <div className="w-12 h-12 flex-shrink-0 relative">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {/* Right: Music Details */}
      <div className="ml-4 w-full flex justify-between items-center">
        <div>
        <h3 className="text-base font-semibold text-gray-00 truncate">{name}</h3>
        <p className="text-sm text-gray-600 truncate">{singer}</p>
        </div>
        <div className="flex justify-end mr-4">
        <p className="text-sm text-gray-500">{duration}</p>
        </div>
      </div>
    </div>
  )
}
