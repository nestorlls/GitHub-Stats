import Layout from '../../components/pageComponents/Layout';
import NotFound from '../../components/pageComponents/NotFound';
import GoToPage from '../../components/compositeComponents/GoToPage';
import { getCurrentPage, totalPage } from '../../Utils/goToPage';
import { useParams } from 'react-router-dom';
import ListGists from '../../components/pageComponents/ListGists';
import { useCurrentPages, useGetStatsUser } from '../../Utils/cumtomeUtils';

const PublicGists = () => {
  const { username, user } = useParams();

  const { data, error, loading } = useGetStatsUser(username, user, 'gists');
  const { currentPage, goNextPage, goPrevPage } = useCurrentPages();

  const size = 4;
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
            <h1 className="page-title">Public Gists({data.length})</h1>
          </>
        )}

        {listForPage.length > 0 ? (
          <ListGists list={listForPage} />
        ) : (
          <NotFound error={error} loading={loading} />
        )}
      </div>
    </Layout>
  );
};

export default PublicGists;
