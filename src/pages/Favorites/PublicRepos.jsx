import { useParams } from 'react-router-dom';
import Layout from '../../components/pageComponents/Layout';
import { useEffect, useState } from 'react';
import { apiFecthStarts } from '../../services/gitHubServices';
import NotFound from '../../components/pageComponents/NotFound';
import ListRepos from '../../components/pageComponents/ListRepos';

const PublicRepos = () => {
  const { username, user } = useParams();

  const [publicRepos, setPublicRepos] = useState({
    data: [],
    error: null,
    loading: 'Not having any public repos',
  });

  const { data, error, loading } = publicRepos;

  useEffect(() => {
    setPublicRepos({
      data: [],
      error: null,
      loading: 'loading public repos...',
    });

    const getPublicRepos = setTimeout(async () => {
      try {
        const response = await apiFecthStarts(username ?? user, 'repos');
        if (response.message) {
          setPublicRepos({ data: [], error: null, loading: response.message });
        }
        setPublicRepos({ data: response, error: null, loading: null });
      } catch (error) {
        setPublicRepos({ data: [], error: error, loading: null });
      }
    }, 500);

    return () => clearTimeout(getPublicRepos);
  }, [username, user]);

  return (
    <Layout>
      <div className="flex flex-col gap-1 w-full items-center mt-24 px-2">
        <h1 className="text-2xl text-white pb-6">
          Public Repos({data.length})
        </h1>
        {data.length > 0 ? (
          <ListRepos list={data} />
        ) : (
          <NotFound error={error} loading={loading} />
        )}
      </div>
    </Layout>
  );
};

export default PublicRepos;
