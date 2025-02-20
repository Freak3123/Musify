import React from "react"
import Image from "next/image"
import { data, musicList } from "@/Data"
import { BigMusicCard } from "./ui/card" // Import BigMusicCard

const Hero = () => {
    return (
        <div className="flex flex-col gap-4 p-4">
            {/* Hero Image */}
            <div className="flex justify-center w-[90%]">
                <div className="relative h-[15rem] w-full">
                    <Image
                        src={"/hero.jpg"}
                        alt={"Hero Image"}
                        fill
                        className="object-cover" // Ensure the image covers the container
                    />
                </div>
            </div>
            <div className="">
                <h1 className="text-lg font-bold">Hello, {data.user.name}</h1>
                <div className="overflow-scroll w-[90%]">
                    <div className="flex gap-4 w-[200%] overflow-auto">
                        {musicList.songs.map((song) => (
                            <BigMusicCard
                                key={song.name}
                                name={song.name}
                                singer={song.author}
                                imageUrl="/music_cover.jpg"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-md font-bold ">New releases for you</h1>
                {/* <div className="flex gap-4 overflow-auto ">
                    {musicList.songs.map((song) => (
                        <BigMusicCard
                            key={song.name} 
                            name={song.name}
                            singer={song.author}
                            imageUrl="/music_cover.jpg"
                        />
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default Hero