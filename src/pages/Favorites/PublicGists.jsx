import { useEffect, useState } from 'react';
import Layout from '../../components/pageComponents/Layout';
import NotFound from '../../components/pageComponents/NotFound';
import GoToPage from '../../components/compositeComponents/GoToPage';
import { getCurrentPage, totalPage } from '../../Utils/goToPage';
import { useParams } from 'react-router-dom';
import { apiFecthStarts } from '../../services/gitHubServices';
import ListGists from '../../components/pageComponents/ListGists';

const PublicGists = () => {
  const { username, user } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [publicGists, setPublicGists] = useState({
    data: [],
    error: null,
    loading: 'Not having any public gists',
  });

  const { data, error, loading } = publicGists;

  useEffect(() => {
    setPublicGists({
      data: [],
      error: null,
      loading: 'loading public gists...',
    });

    const getPublicGists = setTimeout(async () => {
      try {
        const response = await apiFecthStarts(username ?? user, 'gists');
        if (response.message) {
          setPublicGists({ data: [], error: null, loading: response.message });
        }
        setPublicGists({ data: response, error: null, loading: null });
      } catch (error) {
        setPublicGists({ data: [], error: error, loading: null });
      }
    }, 500);

    return () => clearTimeout(getPublicGists);
  }, [username, user]);

  function goNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function goPrevPage() {
    setCurrentPage(currentPage - 1);
  }

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
