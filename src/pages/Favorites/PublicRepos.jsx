import { useParams } from 'react-router-dom';
import Layout from '../../components/pageComponents/Layout';
import NotFound from '../../components/pageComponents/NotFound';
import ListRepos from '../../components/pageComponents/ListRepos';
import { getCurrentPage, totalPage } from '../../Utils/goToPage';
import GoToPage from '../../components/compositeComponents/GoToPage';
import { useCurrentPages, useGetStatsUser } from '../../Utils/cumtomeUtils';

const PublicRepos = () => {
  const { username, user } = useParams();

  const { data, error, loading } = useGetStatsUser(username, user, 'repos');
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
            <h1 className="page-title">Public Repos({data.length})</h1>
          </>
        )}

        {listForPage.length > 0 ? (
          <ListRepos list={listForPage} />
        ) : (
          <NotFound error={error} loading={loading} />
        )}
      </div>
    </Layout>
  );
};

export default PublicRepos;
