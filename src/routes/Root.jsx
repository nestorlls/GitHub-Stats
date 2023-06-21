import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import FavoriteUser from '../pages/Favorites/FavoriteUser';
import Followers from '../pages/Favorites/Followers';
import Following from '../pages/Favorites/Following';
import PublicRepos from '../pages/Favorites/PublicRepos';
import PublicGists from '../pages/Favorites/PublicGists';
import { useFavorites } from '../context/FavoriteContext';
import { useEffect } from 'react';
import FavoritesData from '../services/favoriteServices';

const Root = () => {
  const { setFavorites, fetchFavorites } = useFavorites();

  // get all our favorites user
  useEffect(() => {
    setFavorites({
      data: [],
      error: null,
      loading: 'Loading favorites...',
    });

    const fetchFavorite = setTimeout(() => {
      fetchFavorites(FavoritesData.getFavorites);
    }, 500);

    return () => clearTimeout(fetchFavorite);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:user/followers" element={<Followers />} />
          <Route path="/:user/followings" element={<Following />} />
          <Route path="/:user/public_repos" element={<PublicRepos />} />
          <Route path="/:user/public_gists" element={<PublicGists />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites/*" element={<Favorites />} />
          <Route path="/favorites/:username" element={<FavoriteUser />} />
          <Route
            path="/favorites/:username/followers"
            element={<Followers />}
          />
          <Route
            path="/favorites/:username/followings"
            element={<Following />}
          />
          <Route
            path="/favorites/:username/public_repos"
            element={<PublicRepos />}
          />
          <Route
            path="/favorites/:username/public_gists"
            element={<PublicGists />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Root;
