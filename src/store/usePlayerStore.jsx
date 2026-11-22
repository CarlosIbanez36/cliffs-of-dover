// src/store/usePlayerStore.jsx
import { create } from "zustand";
import { tracks as initialTracks } from "../data/tracks";

export const usePlayerStore = create((set, get) => ({
  tracks: initialTracks,
  currentTrackId: initialTracks[0].id,
  isPlaying: false,
  playlist: [], // Array de IDs de canciones favoritas

  // Reproductor
  playTrack: (trackId) => set({ currentTrackId: trackId, isPlaying: true }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  nextTrack: () => {
    const { tracks, currentTrackId } = get();
    const currentIndex = tracks.findIndex((t) => t.id === currentTrackId);
    const nextIndex = (currentIndex + 1) % tracks.length;
    set({ currentTrackId: tracks[nextIndex].id, isPlaying: true });
  },
  prevTrack: () => {
    const { tracks, currentTrackId } = get();
    const currentIndex = tracks.findIndex((t) => t.id === currentTrackId);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    set({ currentTrackId: tracks[prevIndex].id, isPlaying: true });
  },
  getCurrentTrack: () => {
    const { tracks, currentTrackId } = get();
    return tracks.find((t) => t.id === currentTrackId);
  },

  // Playlist
  togglePlaylist: (trackId) => set((state) => {
    const isInPlaylist = state.playlist.includes(trackId);
    return {
      playlist: isInPlaylist 
        ? state.playlist.filter(id => id !== trackId)
        : [...state.playlist, trackId]
    };
  }),
}));
