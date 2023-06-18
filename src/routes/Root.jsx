import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import FavoriteUser from '../pages/Favorites/FavoriteUser';
import Followers from '../pages/Favorites/Followers';
import Following from '../pages/Favorites/Following';
import PublicRepos from '../pages/Favorites/PublicRepos';
import PublicGists from '../pages/Favorites/PublicGists';

const Root = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/followings" element={<Following />} />
          <Route path="/public_repos" element={<PublicRepos />} />
          <Route path="/public_gists" element={<PublicGists />} />
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
