// src/pages/Explore.jsx
import { useState } from "react";
import { Search } from "lucide-react";
import { usePlayerStore } from "../store/usePlayerStore";
import TrackList from "../components/tracks/TrackList";

export default function Explore() {
  const tracks = usePlayerStore((state) => state.tracks);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTracks = tracks.filter(t => 
    t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.album.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Explorar Guitarras</h1>
          <p className="text-zinc-400 mt-2">Los mejores riffs, solos y leyendas de la guitarra eléctrica.</p>
        </div>
        
        {/* Buscador */}
        <div className="flex items-center gap-2 bg-[#121216] border border-[#27272a] px-4 py-2 rounded-lg w-full md:w-72">
          <Search className="w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar canción, artista..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent border-none outline-none text-sm text-white w-full placeholder:text-zinc-600"
          />
        </div>
      </header>

      {filteredTracks.length === 0 ? (
        <p className="text-zinc-500 text-center py-10">No se encontraron canciones con "{searchTerm}".</p>
      ) : (
        <TrackList tracks={filteredTracks} />
      )}
    </div>
  );
}
