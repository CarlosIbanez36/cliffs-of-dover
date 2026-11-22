// src/pages/Playlist.jsx
import { usePlayerStore } from "../store/usePlayerStore";
import TrackList from "../components/tracks/TrackList";
import { HeartOff } from "lucide-react";

export default function Playlist() {
  const { tracks, playlist } = usePlayerStore();
  
  // Filtramos las canciones que están en la playlist
  const favoriteTracks = tracks.filter(t => playlist.includes(t.id));

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-white tracking-tight">Mi Playlist</h1>
        <p className="text-zinc-400 mt-2">Tus riffs favoritos guardados en un solo lugar.</p>
      </header>

      {favoriteTracks.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
          <HeartOff className="w-12 h-12 mb-4 opacity-20" />
          <p>Tu playlist está vacía.</p>
          <p className="text-sm">Ve a "Explorar" y pulsa el corazón en tus canciones favoritas.</p>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <span className="text-sm text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            {favoriteTracks.length} canciones guardadas
          </span>
          <TrackList tracks={favoriteTracks} />
        </div>
      )}
    </div>
  );
}
