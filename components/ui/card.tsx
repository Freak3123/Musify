"use client"
import React from "react"
import Image from "next/image"
import { musicData } from "@/Data"




type MusicCardProps = {
  imageUrl?: string
  name?: string
  singer?: string
  duration?: string,
  song?:typeof musicData.recents
}

export function BigMusicCard({
  imageUrl = "/music_cover.jpg", // Default image URL (ensure this exists in the public folder)
  name = "Unknown Track",
  singer = "Unknown Artist",
  song 
}: MusicCardProps) {

  const handleClick = () => {
    const event = new CustomEvent("songSelected", {detail: {audio: song} });
    window.dispatchEvent(event);
};


  


  return (
    <div onClick={handleClick} className="rounded-md shadow-lg overflow-hidden">
      {/* Image */}
      <div className="relative aspect-square w-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
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
  imageUrl = "/music_cover.jpg",
  name = "Unknown Track",
  singer = "Unknown Artist",
  duration = "00:00",
}: MusicCardProps) {
  function sliceMe(str:string){
    if (str.length>=18){
      return str.slice(0,18)+"..."
    } else{
      return str
    }
  }
  return (
    <div className="flex items-center overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 h-14">
      {/* Left: Music Image */}
      <div className="w-14 h-14 relative flex-shrink-0">
        <Image src={imageUrl} alt={name} fill className="object-cover rounded-l-lg" />
      </div>

      {/* Right: Music Details */}
      <div className="flex justify-between items-center w-full ml-4 pr-4">
        <div className="min-w-0 max-w-[60%] flex justify-start flex-col">
          <h3 className="text-sm font-semibold text-gray-900 truncate">{name}</h3>
          <p className="text-xs text-gray-500 truncate">{sliceMe(singer)}</p>
        </div>
        <div className="flex justify-end">
          <div className="flex justify-end text-xs text-gray-500 w-12 text-right">{duration}</div>
        </div>
      </div>
    </div>
  );
}

