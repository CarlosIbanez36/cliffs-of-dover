// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Explore from "./pages/Explore";
import Playlist from "./pages/Playlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Explore />} />
          <Route path="playlist" element={<Playlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
