// import avatar from '../../assets/icons/avatar.svg';
import { useState } from 'react';
import Avatar from '../baseComponents/Avatar';
import Bio from '../baseComponents/Bio';
import FavoriteIcon from '../baseComponents/Favorite';
import Username from '../baseComponents/Username';
import StartSection from '../compositeComponents/StartSection';
import { useFavorites } from '../../context/FavoriteContext';

const GitHubCard = ({
  avatar_url,
  bio,
  followers,
  following,
  name,
  login,
  public_repos,
  public_gists,
}) => {
  const { favorites } = useFavorites();
  const [addOrRemoveToFavorites, setAddOrRemoveToFavorites] = useState(false);

  const handleFavorite = () => {
    console.log('Favorite');
    setAddOrRemoveToFavorites(!addOrRemoveToFavorites);
  };

  const isFAvorite = favorites.data.find((fav) => fav.username === login)
    ? true
    : false;

  return (
    <div key={login}>
      <Avatar avatar_url={avatar_url} name={login} size={52} />
      <div className="flex justify-center gap-2" key={login}>
        <Username username={name} size="2xl" font_weight="bold" />
        <FavoriteIcon isFavorite={isFAvorite} onClick={handleFavorite} />
      </div>
      <Bio bio={bio} />
      <StartSection
        followers={followers}
        following={following}
        public_repos={public_repos}
        public_gists={public_gists}
        user={login}
      />
    </div>
  );
};

export default GitHubCard;
