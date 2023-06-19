import React, { useEffect, useState } from 'react';
import Layout from '../components/pageComponents/Layout';
import List from '../components/pageComponents/ListCard';
import FavoritesData from '../services/favoriteServices';
import NotFound from '../components/pageComponents/NotFound';

const Favorites = () => {
  const [favorites, setFavorites] = useState({
    data: [],
    error: null,
    loading: 'No favorites...',
  });

  const { data, error, loading } = favorites;

  useEffect(() => {
    setFavorites({
      data: [],
      error: null,
      loading: 'Loading favorites...',
    });

    const getFavoritesFrom = setTimeout(async () => {
      try {
        const response = await FavoritesData.getFavorites();

        if (response.message) {
          setFavorites({ data: [], error: response.message, loading: null });
          return;
        }

        setFavorites({ data: response, error: null, loading: null });
      } catch (error) {
        setFavorites({ data: [], error: error, loading: null });
      }
    }, 500);
    return () => clearTimeout(getFavoritesFrom);
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center w-full p-4">
        <h1 className="text-2xl text-white">
          Favorites <span>({data?.length})</span>
        </h1>
        <div>páginas</div>
        {data.length > 0 ? (
          <List list={data} />
        ) : (
          <NotFound error={error} loading={loading} />
        )}
      </div>
    </Layout>
  );
};

export default Favorites;
