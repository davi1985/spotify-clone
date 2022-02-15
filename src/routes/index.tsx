import { Routes, Route } from 'react-router-dom';

import { Browse } from '../pages/browse';
import { Playlist } from '../pages/playlist';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Browse />} />

    <Route path="/playlists/:id" element={<Playlist />} />
  </Routes>
);
