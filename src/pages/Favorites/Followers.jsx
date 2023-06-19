import { useParams } from 'react-router-dom';
import Layout from '../../components/pageComponents/Layout';
import { useEffect, useState } from 'react';
import { apiFecthStarts } from '../../services/gitHubServices';
import List from '../../components/pageComponents/ListCard';
import NotFound from '../../components/pageComponents/NotFound';

const Followers = ({}) => {
  const { username, user } = useParams();

  const [followers, setFollowers] = useState({
    data: [],
    error: null,
    loading: 'Not have followers...',
  });

  const { data, error, loading } = followers;

  useEffect(() => {
    setFollowers({
      data: [],
      error: null,
      loading: 'Loading followers...',
    });

    const getFolowers = setTimeout(async () => {
      try {
        const res = await apiFecthStarts(username ?? user, 'followers');
        if (res.message) {
          setFollowers({ data: [], error: null, loading: res.message });
        }
        setFollowers({ data: res, error: null, loading: null });
      } catch (error) {
        setFollowers({ data: [], error: error, loading: null });
      }
    }, 500);

    return () => clearTimeout(getFolowers);
  }, [username, user]);

  return (
    <Layout>
      <div className="flex flex-col gap-1 w-full items-center mt-24">
        <h1 className="text-2xl text-white pb-6">Followers ({data.length})</h1>
        {data.length > 0 ? (
          <List list={data} />
        ) : (
          <NotFound loading={loading} error={error} />
        )}
      </div>
    </Layout>
  );
};

export default Followers;
