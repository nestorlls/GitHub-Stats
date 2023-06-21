import { createContext, useContext, useMemo, useState } from 'react';
import FavoritesData from '../services/favoriteServices';

const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState({
    data: [],
    error: null,
    loading: 'No favorites...',
  });

  const { data } = favorites;

  const fetchFavorites = async (callback) => {
    try {
      const response = await callback();

      if (response.message) {
        setFavorites({ data: [], error: response.message, loading: null });
        return;
      }

      setFavorites({ data: response, error: null, loading: null });
    } catch (error) {
      setFavorites({ data: [], error: error.message, loading: null });
    }
  };

  const createFavorite = (newFavorite) => {
    FavoritesData.createFavorite(newFavorite)
      .then((data) => {
        setFavorites({
          ...favorites,
          data: [...favorites.data, data],
        });
      })
      .catch((error) => console.log(error));
  };

  const removeFavorite = (favoriteData) => {
    const favorite = data.find(
      (favorite) =>
        favorite.name === favoriteData.name ||
        favorite.name === favoriteData.login
    );

    FavoritesData.removeFavorite(favorite.id)
      .then(() => {
        const newFavorites = data.filter(
          (fav) => fav.name !== favorite.name && fav.name !== favorite.login
        );

        console.log(newFavorites);
        setFavorites({
          ...favorites,
          data: newFavorites,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const value = useMemo(
    () => ({
      favorites,
      setFavorites,
      fetchFavorites,
      createFavorite,
      removeFavorite,
    }),
    [favorites, setFavorites, fetchFavorites, createFavorite, removeFavorite]
  );

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

const useFavorites = () => {
  return useContext(FavoriteContext);
};

export { FavoriteProvider, useFavorites };
