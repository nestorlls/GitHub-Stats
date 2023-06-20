import React, { useEffect, useState } from 'react';
import Layout from '../components/pageComponents/Layout';
import List from '../components/pageComponents/ListCard';
import FavoritesData from '../services/favoriteServices';
import NotFound from '../components/pageComponents/NotFound';
import { getCurrentPage, totalPage } from '../Utils/goToPage';
import GoToPage from '../components/compositeComponents/GoToPage';
import { useCurrentPages } from '../Utils/cumtomeUtils';

const Favorites = () => {
  const [favorites, setFavorites] = useState({
    data: [],
    error: null,
    loading: 'No favorites...',
  });

  const { currentPage, goNextPage, goPrevPage } = useCurrentPages();
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

  const size = 6;
  const totalPages = totalPage(size, data);
  const listForPage = getCurrentPage(data, currentPage, size);

  return (
    <Layout>
      <div className="page">
        {data.length > 0 && (
          <>
            <GoToPage
              currentPage={currentPage}
              totalPages={totalPages}
              limiteLower={1}
              limiteHigher={totalPages}
              goNextPage={goNextPage}
              goPrevPage={goPrevPage}
            />
            <h1 className="text-2xl text-white pb-6">
              Favorites ({data.length})
            </h1>
          </>
        )}
        {listForPage.length > 0 ? (
          <List list={listForPage} />
        ) : (
          <NotFound error={error} loading={loading} />
        )}
      </div>
    </Layout>
  );
};

export default Favorites;
