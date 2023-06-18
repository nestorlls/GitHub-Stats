// import avatar from '../../assets/icons/avatar.svg';
import Avatar from '../baseComponents/Avatar';
import Bio from '../baseComponents/Bio';
import Favorite from '../baseComponents/Favorite';
import Username from '../baseComponents/Username';
import StartSection from '../compositeComponents/StartSection';

const GitHubCard = ({
  avatar_url,
  bio,
  followers,
  following,
  name,
  public_repos,
  public_gists,
}) => {
  return (
    <>
      <Avatar avatar_url={avatar_url} name={name} size={52} />
      <div className="flex justify-center gap-2">
        <Username username={name} />
        <Favorite isFavorite={false} />
      </div>
      <Bio bio={bio} />
      <StartSection
        followers={followers}
        following={following}
        public_repos={public_repos}
        public_gists={public_gists}
      />
    </>
  );
};

export default GitHubCard;
