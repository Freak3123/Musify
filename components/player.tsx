'use client';
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import React from 'react';
import { Slider } from '@/components/ui/slider';
import {
    Shuffle,
    SkipBack,
    Play,
    Pause,
    SkipForward,
    Repeat,
    Heart,
    SquarePlus,
    Share2,
    Volume2,
    Mic2,
    MonitorSmartphone,
} from 'lucide-react';



const Player = () => {

    const [currentSong, setCurrentSong] = useState(null);
    const [isPlayingRN, setIsPlayingRN] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleSongSelection = (event: any) => {
            setCurrentSong(event.detail);
            setIsPlayingRN(true);
            setIsPlaying(true);

        };

        window.addEventListener("songSelected", handleSongSelection);
        return () => {
            window.removeEventListener("songSelected", handleSongSelection);
        };
    }, []);


    useEffect(() => {
        if (audioRef.current) {
            if (isPlayingRN) {
                audioRef.current.play();
                setIsPlaying(true);

            } else {
                audioRef.current.pause();
                setIsPlaying(false);

            }
        }
    }, [isPlayingRN, currentSong]);
    useEffect(() => {
        const updateProgress = () => {
            if (audioRef.current) {
                setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
            }
        };

        if (audioRef.current) {
            audioRef.current.addEventListener("timeupdate", updateProgress);
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener("timeupdate", updateProgress);
            }
        };
    }, [currentSong]);

    const handleSeek = (value: number[]) => {
        if (audioRef.current) {
            audioRef.current.currentTime = (value[0] / 100) * audioRef.current.duration;
            setProgress(value[0]); // Sync UI
        }
    };



    const handleVolumeChange = (value: number[]) => {
        if (audioRef.current) {
            audioRef.current.volume = value[0] / 100; // Range 0-1
        }
    };
    const formatTime = (seconds: number) => {
        if (isNaN(seconds)) return "0:00";
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };






    return (
        <>
            {/* Album Cover Image */}
            <div className="fixed bottom-24 z-50">
                <Image
                    src="/music_cover.jpg"
                    alt="Album Cover"
                    height={100}
                    width={100}
                    style={{ height: '18vw', width: '18vw' }}
                />
            </div>

            {/* Music Player Controls */}
            <div className="fixed bottom-0 w-full h-24 bg-white text-black z-40 px-6 flex items-center justify-between border-t border-black/10 shadow-lg">
                {/* Song Info */}
                <div className="flex items-center gap-4 w-[20%] min-w-[180px]">
                    <div>
                        <h3 className="font-medium truncate cursor-pointer hover:underline">Song Name</h3>
                        <p className="text-black/70 text-sm truncate cursor-pointer hover:underline">Artist Name</p>
                    </div>
                    <Heart className="w-5 h-5 text-black/70 cursor-pointer hover:text-black" />
                    <SquarePlus className="w-5 h-5 text-black/70 cursor-pointer hover:text-black" />
                </div>

                {/* Playback Controls */}
                <div className="flex flex-col items-center gap-2 flex-1 max-w-full sm:max-w-[45%]">
                    <div className="flex items-center gap-4 sm:gap-6">
                        <button className="hover:text-black" title="Shuffle">
                            <Shuffle className="h-4 w-4" />
                        </button>

                        <button className="hover:text-black" title="Previous Track">
                            <SkipBack className="h-4 w-4" />
                        </button>

                        <audio ref={audioRef} src={currentSong?.audio ? currentSong.audio : null} />
                        {/* Play Button */}
                        <button
                            className="bg-black rounded-full h-10 w-10 flex items-center justify-center hover:bg-black/80"
                            onClick={() => { setIsPlayingRN(!isPlayingRN) }}
                            title={isPlaying ? 'Pause' : 'Play'}
                        >
                            {isPlaying ? (
                                <Pause className="h-5 w-5 text-white" />
                            ) : (
                                <Play className="h-5 w-5 text-white" />
                            )}
                        </button>

                        <button className="hover:text-black" title="Next Track">
                            <SkipForward className="h-4 w-4" />
                        </button>

                        <button className="hover:text-black" title="Repeat">
                            <Repeat className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Progress Slider */}
                    <div className="flex items-center gap-2 w-full">
                        <div className="text-xs text-black/70">0:00</div>
                        <Slider value={[progress]}
                            max={100}
                            step={1}
                            className="w-full"
                            onValueChange={handleSeek} />
                        <div className="text-xs text-black/70"> {audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}</div>
                    </div>
                </div>

                {/* Volume + Icons */}
                <div className="flex items-center gap-4 justify-end">
                    {/* Volume Controls */}
                    <Volume2 className="w-5 h-5 cursor-pointer text-black/70 hover:text-black" />
                    <Slider defaultValue={[50]} max={100} step={1} onValueChange={handleVolumeChange} className="w-24" />

                    {/* Icons */}
                    <Mic2 className="w-5 h-5 cursor-pointer text-black/70 hover:text-black" />
                    <MonitorSmartphone className="w-5 h-5 cursor-pointer text-black/70 hover:text-black" />
                    <Share2 className="w-5 h-5 cursor-pointer text-black/70 hover:text-black" />
                </div>
            </div>
        </>
    );
};

export default Player;
