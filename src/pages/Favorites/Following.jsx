import React, { useEffect, useState } from 'react';
import Layout from '../../components/pageComponents/Layout';
import { useParams } from 'react-router-dom';
import { apiFecthStarts } from '../../services/gitHubServices';
import NotFound from '../../components/pageComponents/NotFound';
import List from '../../components/pageComponents/ListCard';

const Following = () => {
  const { username } = useParams();

  const [following, setFollowing] = useState({
    data: [],
    error: null,
    loading: 'Not found folling...',
  });

  const { data, error, loading } = following;

  useEffect(() => {
    if (!username) return;
    setFollowing({ data: [], error: null, loading: 'loading following...' });

    const getFollowing = setTimeout(async () => {
      try {
        const res = await apiFecthStarts(username, 'following');
        if (res.message) {
          setFollowing({ data: [], error: null, loading: res.message });
        }

        setFollowing({ data: res, error: null, loading: null });
      } catch (error) {
        setFollowing({ data: [], error: error, loading: null });
      }
    }, 500);

    return () => clearTimeout(getFollowing);
  }, [username]);

  return (
    <Layout>
      <div className="flex flex-col gap-1 w-full items-center mt-24">
        <h1 className="text-2xl text-white pb-6">
          Following <span>({data.length})</span>
        </h1>
        {data.length > 0 ? (
          <List list={data} />
        ) : (
          <NotFound loading={loading} error={error} />
        )}
      </div>
    </Layout>
  );
};

export default Following;
