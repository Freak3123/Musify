"use client"
import React from "react"
import Image from "next/image"
import { data, musicData } from "@/Data"
import { BigMusicCard } from "./ui/card"
import { useScreenSize } from "@/hooks/useScreenSize";

const Hero = () => {
    const isXl = useScreenSize();
    const songsToDisplay = isXl ? 5 : 4;

    const renderMusicCards = (songs: typeof musicData.recents) =>
        songs.slice(0, songsToDisplay).map((song) => (
            <div key={song.name} className="m-2">
                <BigMusicCard
                    name={song.name}
                    singer={song.author}
                    imageUrl="/music_cover.jpg"
                    song={song } // Default audio
                />
            </div>
        ))

    return (
        <div className="flex flex-col gap-4 p-4">
            {/* Hero Image */}
            <div className="flex justify-center">
                <div className="relative w-full h-full">
                    <Image
                        src="/hero.jpg"
                        alt="Hero Image"
                        height={1000}
                        width={1000}
                        className="w-full h-full"
                    />
                </div>
            </div>

            {/* Welcome Section */}
            <div>
                <h1 className="py-2 text-lg xl:text-xl font-bold">Hello, {data.user.name}</h1>
                <div className="overflow-x-auto w-full no-scrollbar">
                    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {renderMusicCards(musicData.recents)}
                    </div>
                </div>
            </div>

            {/* New Releases Section */}
            <div>
                <h1 className="py-2 text-md xl:text-xl font-bold">New releases for you</h1>
                <div className="overflow-x-auto w-full no-scrollbar">
                    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {renderMusicCards(musicData.recents)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
