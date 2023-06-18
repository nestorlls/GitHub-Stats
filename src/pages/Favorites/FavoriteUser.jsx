import { useEffect, useState } from 'react';
import Layout from '../../components/pageComponents/Layout';
import { searchGitHubUser } from '../../services/gitHubServices';
import { useParams } from 'react-router-dom';
import GitHubCard from '../../components/pageComponents/GitHubCard';
import NotFound from '../../components/pageComponents/NotFound';

const FavoriteUser = () => {
  const { username } = useParams();

  const [user, setUser] = useState('');
  const [userSelected, setUserSelected] = useState({
    data: null,
    error: null,
    loading: 'No user...',
  });

  const { data, error, loading } = userSelected;

  useEffect(() => {
    setUser(username);
  }, [username]);

  useEffect(() => {
    if (!username) return;
    setUserSelected({ data: null, error: null, loading: 'Retrieving user...' });

    const getUser = setTimeout(async () => {
      try {
        const res = await searchGitHubUser(user);
        if (res.message) {
          setUserSelected({ data: null, error: null, loading: res.message });
        }
        setUserSelected({ data: res, error: null, loading: null });
      } catch (error) {
        setUserSelected({ data: null, error: error, loading: null });
      }
    }, 1000);

    return () => clearTimeout(getUser);
  }, [user]);

  return (
    <Layout>
      <div className="flex flex-col gap-1 w-full items-center mt-24">
        {!data ? (
          <NotFound loading={loading} error={error} />
        ) : (
          <GitHubCard {...data} />
        )}
      </div>
    </Layout>
  );
};

export default FavoriteUser;
