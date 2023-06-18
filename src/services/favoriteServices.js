import apiFetch from './apiFetch';

const FavoritesData = {
  async createFavorite(newFavoriteData) {
    return await apiFetch('/favorites', { body: newFavoriteData });
  },
  async removeFavorite(favoriteId) {
    return await apiFetch(`/favorites/${favoriteId}`, { method: 'DELETE' });
  },
  async getFavorites() {
    return await apiFetch('/favorites');
  },
};

export default FavoritesData;
