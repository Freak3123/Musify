import React from "react"
import Image from "next/image"
import { data, musicList } from "@/Data"
import { BigMusicCard } from "./ui/card" // Import BigMusicCard

const musicList1 = musicList.songs.slice(0, 4)

const Hero = () => {
    return (
        <div className="flex flex-col gap-4 p-4 w-full">
            {/* Hero Image */}
            <div className="flex justify-center">
                <div className="relative">
                    <Image
                        src={"/hero.jpg"}
                        alt={"Hero Image"}
                        height={1000}
                        width={1000}
                        className="w-full h-full"
                    />
                </div>
            </div>
            <div className="">
                <h1 className="text-lg font-bold">Hello, {data.user.name}</h1>
                <div className=" relative overflow-x-auto w-full no-scrollbar">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {musicList1.map((song) => (
                            <div key={song.name} className=" m-2 ">
                                <BigMusicCard
                                    
                                    name={song.name}
                                    singer={song.author}
                                    imageUrl="/music_cover.jpg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-md font-bold ">New releases for you</h1>
                <div className=" relative overflow-x-auto w-full no-scrollbar">
                    <div className="grid max-gap-4 min-gap-2 overflow-x-auto grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                        {musicList1.map((song) => (
                            <div key={song.name} className=" 0 p-4 rounded-md 0 transition-all group cursor-pointer">
                                <BigMusicCard
                                    name={song.name}
                                    singer={song.author}
                                    imageUrl="/music_cover.jpg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero