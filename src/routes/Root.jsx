import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';

const Root = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Root;
