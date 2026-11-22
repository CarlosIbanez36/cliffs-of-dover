// src/components/player/PlayerBar.jsx
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { usePlayerStore } from "../../store/usePlayerStore";

export default function PlayerBar() {
  const { isPlaying, togglePlay, nextTrack, prevTrack, getCurrentTrack } = usePlayerStore();
  const currentTrack = getCurrentTrack();
  if (!currentTrack) return null;

  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#121216]/95 backdrop-blur border-t border-[#27272a] flex items-center px-6 z-50">
      <div className="flex items-center gap-4 w-1/3">
        <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${currentTrack.color} flex items-center justify-center text-2xl shadow-lg`}>{currentTrack.cover}</div>
        <div>
          <h4 className="text-white font-bold text-sm truncate">{currentTrack.title}</h4>
          <p className="text-zinc-400 text-xs truncate">{currentTrack.artist}</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-6">
          <button onClick={prevTrack} className="text-zinc-400 hover:text-white transition-colors"><SkipBack className="w-5 h-5" /></button>
          <button onClick={togglePlay} className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center transition-transform hover:scale-105">
            {isPlaying ? <Pause className="w-5 h-5 fill-black" /> : <Play className="w-5 h-5 fill-black ml-1" />}
          </button>
          <button onClick={nextTrack} className="text-zinc-400 hover:text-white transition-colors"><SkipForward className="w-5 h-5" /></button>
        </div>
        <div className="w-full max-w-md flex items-center gap-2 text-[10px] text-zinc-500 font-mono">
          <span>0:00</span><div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-amber-500 w-1/3 rounded-full"></div></div><span>{currentTrack.duration}</span>
        </div>
      </div>
      <div className="w-1/3 flex justify-end items-center gap-2 text-zinc-500">
        <Volume2 className="w-4 h-4" /><div className="w-24 h-1 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-zinc-400 w-2/3 rounded-full"></div></div>
      </div>
    </div>
  );
}
