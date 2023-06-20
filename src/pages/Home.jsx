import React, { useCallback, useState } from 'react';
import Layout from '../components/pageComponents/Layout';
import SearchInput from '../components/compositeComponents/SearchInput';
import UserCard from '../components/pageComponents/UserCard';
import { useGitHubUserSearch } from '../Utils/cumtomeUtils';
import { debounce } from 'lodash';

const Home = () => {
  const [gitHubUser, setGitHubUser] = useState('');

  const { data, error, loading } = useGitHubUserSearch(gitHubUser);

  const debouncedHandleChange = useCallback(
    debounce((e) => {
      const value = e.target.value;
      setGitHubUser(value);
    }, 500),
    []
  );

  const handleChange = useCallback((e) => {
    debouncedHandleChange(e);
  });

  return (
    <Layout>
      <div className="flex flex-col gap-1 w-full items-center">
        <SearchInput handleChange={handleChange} />
        <UserCard data={data} error={error} loading={loading} />
      </div>
    </Layout>
  );
};

export default Home;
