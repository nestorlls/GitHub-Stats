import { BASE_URI, TOKEN } from '../config';
const apiFetch = async (endPoint, { method, headers, body } = {}) => {
  const token = sessionStorage.getItem(TOKEN);

  if (token) {
    headers = { ...headers, Authorization: `Bearer ${token}` };
  }

  if (body) {
    headers = { ...headers, 'Content-Type': 'application/json' };
  }

  const config = {
    method: method || (body ? 'POST' : 'GET'),
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(BASE_URI + endPoint, config);

  let data;
  if (!response.ok) {
    if (token && response.status === 401) {
      sessionStorage.removeItem(TOKEN);
      window.location.reload();
    }

    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }

    throw new Error(data.errors);
  }

  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }

  return data;
};

export default apiFetch;
