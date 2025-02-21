'use client';
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import { Slider } from '@/components/ui/slider';
import {
    Shuffle, SkipBack, Play, Pause, SkipForward, Repeat,
    Heart, SquarePlus, Share2, Volume2, Mic2, MonitorSmartphone
} from 'lucide-react';
import ThemeChanger from "./ThemeChanger";

const Player = () => {
    type Song = {
        name?: string;
        author?: string;
        audio?: string;
    };
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isRepeating, setIsRepeating] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const handleSongSelection = (event: Event) => {
            const customEvent = event as CustomEvent<Song>;
            setCurrentSong(customEvent.detail);
            setIsPlaying(true);
        };
    
        window.addEventListener("songSelected", handleSongSelection);
        return () => window.removeEventListener("songSelected", handleSongSelection);
    }, []);
    
    // Play or pause audio when `isPlaying` or `currentSong` changes
    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying && currentSong?.audio) {
                audioRef.current.play().catch(err => console.error("Playback error:", err));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentSong]);

    // Update progress
    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100 || 0);
        }
    };

    const handleSeek = (value: number[]) => {
        if (audioRef.current) {
            audioRef.current.currentTime = (value[0] / 100) * audioRef.current.duration;
            setProgress(value[0]); // Sync UI
        }
    };

    const handleVolumeChange = (value: number[]) => {
        if (audioRef.current) audioRef.current.volume = value[0] / 100;
    };

    const formatTime = (seconds: number) => {
        if (isNaN(seconds)) return "0:00";
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.loop = isRepeating;
        }
    }, [isRepeating]);
    
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
                        <h3 className="font-medium truncate cursor-pointer hover:underline">
                            {currentSong?.name || "Song Name"}
                        </h3>
                        <p className="text-black/70 text-sm truncate cursor-pointer hover:underline">
                            {currentSong?.author || "Artist Name"}
                        </p>
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

                        {/* Audio Element */}
                        <audio
                            ref={audioRef}
                            src={currentSong?.audio || undefined}
                            onTimeUpdate={handleTimeUpdate}
                        />

                        {/* Play/Pause Button */}
                        <button
                            className="bg-black rounded-full h-10 w-10 flex items-center justify-center hover:bg-black/80"
                            onClick={() => setIsPlaying(!isPlaying)}
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

                        <button 
    className={`hover:text-black ${isRepeating ? 'text-black' : 'text-black/70'}`} 
    title="Repeat" 
    onClick={() => setIsRepeating(!isRepeating)}
>
    <Repeat className="h-4 w-4" />
</button>

                    </div>

                    {/* Progress Slider */}
                    <div className="flex items-center gap-2 w-full">
                        <div className="text-xs text-black/70">
                            {audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}
                        </div>
                        <Slider
                            value={[progress]}
                            max={100}
                            step={1}
                            className="w-full"
                            onValueChange={handleSeek}
                        />
                        <div className="text-xs text-black/70">
                            {audioRef.current ? formatTime(audioRef.current.duration) : "0:00"}
                        </div>
                    </div>
                </div>

                {/* Volume + Icons */}
                <div className="flex items-center gap-4 justify-end">
                    <Volume2 className="w-5 h-5 cursor-pointer text-black/70 hover:text-black" />
                    <Slider defaultValue={[50]} max={100} step={1} onValueChange={handleVolumeChange} className="w-24" />
                    <ThemeChanger/>
                    <Mic2 className="w-5 h-5 cursor-pointer text-black/70 hover:text-black" />
                    <MonitorSmartphone className="w-5 h-5 cursor-pointer text-black/70 hover:text-black" />
                    <Share2 className="w-5 h-5 cursor-pointer text-black/70 hover:text-black" />
                </div>
            </div>
        </>
    );
};

export default Player;
