import React from "react"
import Image from "next/image"

type MusicCardProps = {
  imageUrl?: string
  name?: string
  singer?: string
  duration?: string
}

export function MusicCard({
  imageUrl = "/music_cover.jpg", // Default image URL (ensure this exists in the public folder)
  name = "Unknown Track",
  singer = "Unknown Artist",
  duration = "00:00",
}: MusicCardProps) {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Left: Music Image */}
      <div className="w-16 h-16 flex-shrink-0 relative">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Right: Music Details */}
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>
        <p className="text-sm text-gray-600 truncate">{singer}</p>
        <p className="text-sm text-gray-500">{duration}</p>
      </div>
    </div>
  )
}
