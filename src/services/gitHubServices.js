import { GITHUB_API_URL } from '../config';

const tokenSecrete = import.meta.env.VITE_GITHUB_TOKEN;

const searchGitHubUser = async (username) => {
  const url = `${GITHUB_API_URL}${username}`;

  const config = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${tokenSecrete}`,
    },
  };

  let data;
  try {
    const response = await fetch(url, config);
    data = await response.json();
  } catch (error) {
    console.log(error);
  }

  return data;
};

export { searchGitHubUser };
