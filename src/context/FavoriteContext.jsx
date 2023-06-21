import { createContext, useContext, useMemo, useState } from 'react';

const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState({
    data: [],
    error: null,
    loading: 'No favorites...',
  });

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

  const value = useMemo(
    () => ({ favorites, setFavorites, fetchFavorites }),
    [favorites, setFavorites, fetchFavorites]
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
