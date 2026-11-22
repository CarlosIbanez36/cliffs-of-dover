// src/components/tracks/TrackCard.jsx
import { Play, Pause, Music, Heart } from "lucide-react";
import { usePlayerStore } from "../../store/usePlayerStore";

export default function TrackCard({ track }) {
  const { playTrack, togglePlay, currentTrackId, isPlaying, playlist, togglePlaylist } = usePlayerStore();
  
  const isCurrent = currentTrackId === track.id;
  const isPlayingThis = isCurrent && isPlaying;
  const isInPlaylist = playlist.includes(track.id);

  const handlePlay = () => {
    if (isCurrent) togglePlay();
    else playTrack(track.id);
  };

  return (
    <div className={`group bg-[#121216] border rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5 ${isCurrent ? 'border-amber-500/50 bg-[#18181b]' : 'border-[#27272a] hover:border-zinc-700'}`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${track.color} flex items-center justify-center text-3xl shadow-md`}>
          {track.cover}
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => togglePlaylist(track.id)}
            className={`p-2 rounded-full transition-colors ${isInPlaylist ? 'text-red-500 hover:bg-red-500/10' : 'text-zinc-600 hover:text-zinc-400'}`}
            title={isInPlaylist ? "Quitar de playlist" : "Añadir a playlist"}
          >
            <Heart className={`w-5 h-5 ${isInPlaylist ? 'fill-red-500' : ''}`} />
          </button>
          <button 
            onClick={handlePlay}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              isCurrent ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'bg-zinc-800 text-zinc-400 hover:bg-amber-500 hover:text-black'
            }`}
          >
            {isPlayingThis ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
          </button>
        </div>
      </div>

      <div>
        <h3 className={`font-bold text-lg leading-tight truncate ${isCurrent ? 'text-amber-400' : 'text-white'}`}>
          {track.title}
        </h3>
        <p className="text-zinc-400 text-sm mt-1 truncate">{track.artist}</p>
      </div>

      <div className="mt-4 pt-4 border-t border-[#27272a] flex items-center justify-between text-xs text-zinc-500">
        <span className="flex items-center gap-1.5"><Music className="w-3.5 h-3.5" /> {track.album}</span>
        <span className="font-mono">{track.duration}</span>
      </div>
    </div>
  );
}
