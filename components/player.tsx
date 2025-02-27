"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";
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
} from "lucide-react";
import ThemeChanger from "./ThemeChanger";
import { useIsMobile } from "@/hooks/use-mobile";
import { musicData } from "@/Data";


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
  const songs = musicData.recents;
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isLiked, setLiked] = useState(false)
  useEffect(() => {
    const handleSongSelection = (event: Event) => {
      const customEvent = event as CustomEvent<Song>;
      const songIndex = songs.findIndex(song => song.name === customEvent.detail.name);

      if (songIndex !== -1) {
        setCurrentIndex(songIndex);
        setCurrentSong(songs[songIndex]);
        setIsPlaying(true);
      }
    };

    window.addEventListener("songSelected", handleSongSelection);
    return () => window.removeEventListener("songSelected", handleSongSelection);
  }, [songs]);

  // Play or pause audio when isPlaying or currentSong changes
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => console.error("Playback error:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]); // Ensure it runs when song changes  

  useEffect(() => {
    const handleSongSelection = (event: Event) => {
      const customEvent = event as CustomEvent<Song>;
      const songIndex = songs.findIndex(song => song.name === customEvent.detail.name);

      setCurrentIndex(songIndex);
      setCurrentSong(customEvent.detail);
      setIsPlaying(true);
    };

    window.addEventListener("songSelected", handleSongSelection);
    return () => window.removeEventListener("songSelected", handleSongSelection);
  }, [songs]);

  const handleTimeUpdate = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100 || 0);
    }
  };

  const handleSeek = useCallback((value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = (value[0] / 100) * audioRef.current.duration;
      setProgress(value[0]);
    }
  }, []);



  const handleVolumeChange = useCallback((value: number[]) => {
    if (audioRef.current) audioRef.current.volume = value[0] / 100;
  }, []);

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

  const IsMobile = useIsMobile();

  const handleNext = useCallback(() => {
    if (songs.length === 0) return;
    const nextIndex = isShuffling ? Math.floor(Math.random() * songs.length) : (currentIndex + 1) % songs.length;
    setCurrentIndex(nextIndex);
    setCurrentSong(songs[nextIndex]);
    setIsPlaying(true);
  }, [currentIndex, isShuffling, songs]);



  const handlePrev = useCallback(() => {
    if (songs.length === 0) return;
    const prevIndex = isShuffling ? Math.floor(Math.random() * songs.length) : (currentIndex - 1 + songs.length) % songs.length;
    setCurrentIndex(prevIndex);
    setCurrentSong(songs[prevIndex]);
    setIsPlaying(true);
  }, [currentIndex, isShuffling, songs]);


  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isRepeating;
      // if not in repeat mode go to next song
      audioRef.current.onended = () => {
        if (!isRepeating) {
          handleNext();
        }
      };
    }
  }, [isRepeating, currentIndex]);

  return (
    <>
      {/* Album Cover Image */}
      {!IsMobile && (
        <div className="fixed bottom-24 z-50">
          <Image
            src="/music_cover.jpg"
            alt="Album Cover"
            height={100}
            width={100}
            style={{ height: "18vw", width: "18vw" }}
          />
        </div>
      )}

      {/* Music Player Controls */}
      <div className="fixed bottom-0 w-full h-24 pr-4 bg-white dark:bg-zinc-950 text-black z-40 flex justify-between items-center border-t border-black/10 shadow-lg">
        {/* Song Info */}
        {/* {IsMobile && (
          <div>
            <Image
              src="/music_cover.jpg"
              alt="Album Cover"
              height={100}
              width={100}
            />
          </div>
        )} */}
        <div
          className={`flex items-center gap-4 min-w-0  ${IsMobile ? "pl-2" : "pl-6"
            }`}
        >
          <div>
            <h3 className="font-medium dark:text-white truncate cursor-pointer hover:underline">
              {currentSong?.name || "Song Name"}
            </h3>
            <p className="text-black/70 dark:text-white text-sm truncate cursor-pointer hover:underline">
              {currentSong?.author || "Artist Name"}
            </p>
          </div>
          {!IsMobile && (
            <div className=" flex pl-4 pr-2 gap-4 ">
              <Heart onClick={() => { setLiked(!isLiked) }} className={`w-5 h-5 ${isLiked ? "text-red-600 " : " dark:text-white text-black"}    cursor-pointer `} />
              <SquarePlus className="w-5 h-5 dark:text-white text-black/70 cursor-pointer hover:text-black" />
            </div>
          )}
        </div>

        {/* Playback Controls */}
        <div className="flex flex-col px-4 items-center gap-2 flex-1 max-w-full sm:max-w-[45%]">
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              className={`hover:text-blue-500 dark:hover:text-blue-500 ${isShuffling ? "text-blue-500" : "text-black/70 dark:text-white"
                }`}
              title="Shuffle"
              onClick={() => setIsShuffling(!isShuffling)}
            >
              <Shuffle className="h-4 w-4" />
            </button>

            <button
              className={`hover:text-blue-500 dark:hover:text-blue-500 dark:text-white ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
              title="Previous Track"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
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
              className="bg-black dark:bg-white rounded-full h-10 w-10 flex items-center justify-center"
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-white dark:text-black" />
              ) : (
                <Play className="h-5 w-5 text-white dark:text-black" />
              )}
            </button>

            <button
              className={`hover:text-blue-500 dark:hover:text-blue-500 dark:text-white ${currentIndex === songs.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              title="Next Track"
              onClick={handleNext}
              disabled={currentIndex === songs.length - 1}
            >
              <SkipForward className="h-4 w-4" />
            </button>

            <button
              className={`hover:text-blue-500 dark:hover:text-blue-500 ${isRepeating ? "text-blue-500" : "text-black/70 dark:text-white"
                }`}
              title="Repeat"
              onClick={() => setIsRepeating(!isRepeating)}
            >
              <Repeat className="h-4 w-4" />
            </button>
          </div>

          {/* Progress Slider */}
          <div className="flex dark:text-white items-center gap-2 w-full">
            <div className="text-xs dark:text-white text-black/70">
              {audioRef.current
                ? formatTime(audioRef.current.currentTime)
                : "0:00"}
            </div>
            <Slider
              value={[progress]}
              max={100}
              step={1}
              className="w-full"
              onValueChange={handleSeek}
            />
            <div className="text-xs dark:text-white text-black/70">
              {audioRef.current
                ? formatTime(audioRef.current.duration)
                : "0:00"}
            </div>
          </div>
        </div>

        {/* Volume + Icons */}
        <div className="flex dark:text-white items-center gap-4 justify-end">
          {!IsMobile && (
            <div className="flex gap-4">
              <Volume2 className="w-5 h-5 cursor-pointer" />
              <Slider
                defaultValue={[100]}
                max={100}
                step={1}
                onValueChange={handleVolumeChange}
                className="w-24"
              />
            </div>
          )}
          <ThemeChanger />
          {!IsMobile && (
            <div className="flex gap-4">
              <Mic2 className="w-5 h-5 cursor-pointer hover:text-blue-500 dark:hover:text-blue-500" />
              <MonitorSmartphone className="w-5 h-5 cursor-pointerhover:text-blue-500 dark:hover:text-blue-500" />
            </div>
          )}
          {!IsMobile && (
            <div>
              <Share2 className="w-5 h-5 cursor-pointer hover:text-blue-500 dark:hover:text-blue-500" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Player;
