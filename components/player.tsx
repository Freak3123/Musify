'use client'

import Image from 'next/image'
import React from 'react'
import { SIDEBAR_WIDTH } from './ui/sidebar'
import { Slider } from "@/components/ui/slider"
import { Shuffle, SkipBack, Play, Pause, SkipForward, Repeat } from 'lucide-react'

interface PlayerProps {
    isPlaying?: boolean
    onPlayPause?: () => void
}

const Player = ({ isPlaying = false, onPlayPause = () => { } }: PlayerProps) => {
    return (
        <>
            {/* Album Cover Image */}
            <div className="absolute bottom-24 z-50">
                <Image
                    src="/music_cover.jpg"
                    alt="Album Cover"
                    height={100}
                    width={100}
                    style={{ height: SIDEBAR_WIDTH, width: SIDEBAR_WIDTH }}
                />
            </div>

            {/* Music Player Controls */}
            <div className="fixed  bottom-0 w-full h-24 bg-slate-400 z-40  px-6">
                <div className='h-full flex flex-col items-center'>
                    {/* Control Buttons */}
                    <div className="flex justify-center h-full gap-6">
                        {[
                            { Icon: Shuffle, label: 'Shuffle' },
                            { Icon: SkipBack, label: 'Previous Track' },
                            { Icon: isPlaying ? Pause : Play, label: isPlaying ? 'Pause' : 'Play', onClick: onPlayPause, size: 'w-6 h-6' },
                            { Icon: SkipForward, label: 'Next Track' },
                            { Icon: Repeat, label: 'Repeat' }
                        ].map(({ Icon, label, onClick, size = 'w-5 h-5' }) => (
                            <button
                                key={label}
                                className="text-gray-600 hover:text-gray-900"
                                aria-label={label}
                                title={label}
                                onClick={onClick}
                            >
                                <Icon className={size} />
                            </button>
                        ))}
                    </div>

                    {/* Volume/Progress Slider */}
                    <div className="mx-4 w-1/2 h-full">
                        <Slider defaultValue={[0]} max={100} step={1} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Player
