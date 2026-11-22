// src/components/layout/Layout.jsx
import { Outlet, NavLink } from "react-router-dom";
import { Music, Radio, ListMusic } from "lucide-react";
import PlayerBar from "../player/PlayerBar";

export default function Layout() {
  return (
    <div className="flex h-screen bg-[#0a0a0c] text-zinc-300 font-sans overflow-hidden">
      <aside className="w-64 bg-[#121216] border-r border-[#27272a] flex flex-col h-full shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-[#27272a]">
          <Radio className="text-amber-500 w-6 h-6 mr-3 animate-pulse" />
          <span className="text-white font-bold tracking-widest text-sm uppercase">Cliffs of Dover</span>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          <NavLink to="/" className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"}`}>
            <Music className="w-5 h-5" /><span className="font-medium text-sm">Explorar</span>
          </NavLink>
          <NavLink to="/playlist" className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"}`}>
            <ListMusic className="w-5 h-5" /><span className="font-medium text-sm">Mi Playlist</span>
          </NavLink>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-16 border-b border-[#27272a] bg-[#0a0a0c]/80 backdrop-blur flex items-center px-8 shrink-0">
          <span className="text-sm text-zinc-500">Guitar Explorer</span>
        </header>
        <main className="flex-1 overflow-y-auto p-8 pb-28"><Outlet /></main>
        <PlayerBar />
      </div>
    </div>
  );
}
