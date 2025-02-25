"use client"
import React from "react"
import Image from "next/image"
import { musicData } from "@/Data"

type MusicCardProps = {
  imageUrl?: string
  name?: string
  singer?: string
  duration?: string,
  song?: typeof musicData.recents[0]
}

export function BigMusicCard({
  imageUrl = "/music_cover.jpg", // Default image URL
  name = "Unknown Track",
  singer = "Unknown Artist",
  song
}: MusicCardProps) {

  const handleClick = () => {
    if (typeof window !== "undefined") {
      const event = new CustomEvent("songSelected", { detail: song });
      window.dispatchEvent(event);
    }
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
      <div className=" p-4 dark:py-4 dark:px-0">
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
  song
}: MusicCardProps) {
  function sliceMe(str: string) {
    if (str.length >= 18) {
      return str.slice(0, 18) + "..."
    } else {
      return str
    }
  }
  const handleClick = () => {
    if (typeof window !== "undefined") {
      const event = new CustomEvent("songSelected", { detail: song });
      window.dispatchEvent(event);
    }
  };
  return (
    <div onClick={handleClick} className="flex cursor-pointer items-center overflow-hidden py-6 dark:bg-zinc-950 bg-gray-50 shadow-md hover:shadow-lg transition-shadow duration-300 h-14">
      {/* Left: Music Image */}
      <div className="w-14 h-14 relative flex-shrink-0">
        <Image src={imageUrl} alt={name} fill className="object-cover rounded-l-lg dark:rounded-none" />
      </div>

      {/* Right: Music Details */}
      <div className="flex dark:bg-zinc-950 justify-between items-center w-full pl-4">
        <div className="min-w-0 max-w-[60%] flex justify-start  flex-col">
          <h3 className="text-sm dark:text-gray-50 font-semibold text-gray-900 truncate">{name}</h3>
          <p className="text-xs text-gray-500 truncate">{sliceMe(singer)}</p>
        </div>
        <div className="flex justify-end">
          <div className="flex justify-end text-xs text-gray-500 w-12 text-right">{duration}</div>
        </div>
      </div>
    </div>
  );
}

