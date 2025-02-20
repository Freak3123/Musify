'use client';

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

interface PlayerProps {
    isPlaying?: boolean;
    onPlayPause?: () => void;
}

const Player = ({ isPlaying = false, onPlayPause = () => { } }: PlayerProps) => {
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

                        {/* Play Button */}
                        <button
                            className="bg-black rounded-full h-10 w-10 flex items-center justify-center hover:bg-black/80"
                            onClick={onPlayPause}
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
                        <Slider defaultValue={[0]} max={100} step={1} className="w-full" />
                        <div className="text-xs text-black/70">3:45</div>
                    </div>
                </div>

                {/* Volume + Icons */}
                <div className="flex items-center gap-4 justify-end">
                    {/* Volume Controls */}
                    <Volume2 className="w-5 h-5 cursor-pointer text-black/70 hover:text-black" />
                    <Slider defaultValue={[50]} max={100} step={1} className="w-24" />

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
