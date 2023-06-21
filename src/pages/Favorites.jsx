import Layout from '../components/pageComponents/Layout';
import List from '../components/pageComponents/ListCard';
import NotFound from '../components/pageComponents/NotFound';
import { getCurrentPage, totalPage } from '../Utils/goToPage';
import GoToPage from '../components/compositeComponents/GoToPage';
import { useCurrentPages } from '../Utils/cumtomeUtils';
import { useFavorites } from '../context/FavoriteContext';

const Favorites = () => {
  const { favorites } = useFavorites();

  const { currentPage, goNextPage, goPrevPage } = useCurrentPages();
  const { data, error, loading } = favorites;

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
