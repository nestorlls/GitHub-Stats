import { useEffect, useState, useCallback } from 'react';
import { apiFecthStarts, searchGitHubUser } from '../services/gitHubServices';

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

  return { data, error, loading };
};

const useGetStatsUser = (username, user, path) => {
  const [state, setState] = useState({
    data: [],
    error: null,
    loading: 'Not having any public gists',
  });

  const { data, error, loading } = state;

  useEffect(() => {
    setState({ data: [], error: null, loading: 'Loading...' });
    const getStats = setTimeout(async () => {
      try {
        const response = await apiFecthStarts(username ?? user, path);
        if (response.message) {
          setState({ data: [], error: null, loading: response.message });
        }
        setState({ data: response, error: null, loading: null });
      } catch (error) {
        setState({ data: null, error: error, loading: null });
      }
    }, 500);

    return () => clearTimeout(getStats);
  }, [username, user]);

  return { data, error, loading };
};

const useCurrentPages = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const goNextPage = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  const goPrevPage = useCallback(() => {
    setCurrentPage(currentPage - 1);
  }, [currentPage]);

  return { currentPage, goNextPage, goPrevPage };
};

export { useGitHubUserSearch, useGetStatsUser, useCurrentPages };
