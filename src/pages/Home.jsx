import React, { useEffect, useState } from 'react';
import Layout from '../components/pageComponents/Layout';
import Input from '../components/baseComponents/Input';
import NotFound from '../components/pageComponents/NotFound';
import { searchGitHubUser } from '../services/gitHubServices';
import GitHubCard from '../components/pageComponents/GitHubCard';

const Home = () => {
  const [gitHubUser, setGitHubUser] = useState('');
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: 'No user...',
  });

  const { data, error, loading } = state;

  const handleChange = (e) => {
    const value = e.target.value;
    setGitHubUser(value);
  };

  useEffect(() => {
    if (gitHubUser.length === 0) return;
    setState({ data: null, error: null, loading: 'Retrieving user...' });

    const getUser = setTimeout(async () => {
      try {
        const response = await searchGitHubUser(gitHubUser);

        if (response.message) {
          setState({ loading: response.message, data: null, error: null });
          return;
        }

        setState({ loading: null, data: response, error: null });
      } catch (error) {
        setState({ loading: null, data: null, error: error });
      }
    }, 1500);

    return () => {
      clearTimeout(getUser);
    };
  }, [gitHubUser]);

  return (
    <Layout>
      <div className="flex flex-col gap-1 w-full items-center">
        <div className="w-2/3 mt-2 md:mt-2">
          <Input
            type="text"
            name="search"
            placeholder="Search by username"
            onChange={handleChange}
          />
        </div>
        <div className="w-full mt-2">
          {!data ? (
            <NotFound loading={loading} error={error} />
          ) : (
            <GitHubCard {...data} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
