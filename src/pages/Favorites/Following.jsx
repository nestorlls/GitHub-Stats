import Layout from '../../components/pageComponents/Layout';
import { useParams } from 'react-router-dom';
import NotFound from '../../components/pageComponents/NotFound';
import List from '../../components/pageComponents/ListCard';
import { getCurrentPage, totalPage } from '../../Utils/goToPage';
import GoToPage from '../../components/compositeComponents/GoToPage';
import { useCurrentPages, useGetStatsUser } from '../../Utils/cumtomeUtils';

const Following = () => {
  const { username, user } = useParams();

  const { data, error, loading } = useGetStatsUser(username, user, 'following');
  const { currentPage, goNextPage, goPrevPage } = useCurrentPages();

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
              Following ({data.length})
            </h1>
          </>
        )}

        {listForPage.length > 0 ? (
          <List list={listForPage} />
        ) : (
          <NotFound loading={loading} error={error} />
        )}
      </div>
    </Layout>
  );
};

export default Following;
