import { useEffect, useState } from 'react';
import { searchGitHubUser } from '../services/gitHubServices';

const useGitHubUserSearch = (gitHubUser) => {
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: 'No user...',
  });

  const { data, error, loading } = state;

  useEffect(() => {
    if (gitHubUser.length === 0) return;
    setState({ data: null, error: null, loading: 'Retrieving user...' });

    const getUser = setTimeout(async () => {
      try {
        const response = await searchGitHubUser(gitHubUser);

        if (response.message) {
          setState({ loading: response.message, data: null, error: null });
        }

        setState({ loading: null, data: response, error: null });
      } catch (error) {
        setState({ loading: null, data: null, error: error });
      }
    }, 1500);

    return () => clearTimeout(getUser);
  }, [gitHubUser]);

  console.log(error);
  return { data, error, loading };
};

export default useGitHubUserSearch;
