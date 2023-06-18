import React from 'react';
import Start from '../baseComponents/Start';
import followersIcon from '../../assets/icons/followers.svg';
import followingsIcon from '../../assets/icons/followings.svg';
import public_repoIcon from '../../assets/icons/public_repo.svg';
import public_gistsIcon from '../../assets/icons/public_gists.svg';

const StartSection = ({ followers, following, public_repos, public_gists }) => {
  return (
    <div className="w-96 md:w-full grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 justify-center justify-items-center gap-4 mx-auto py-6 px-10">
      <Start
        svg={followersIcon}
        text="followers"
        count={followers}
        path="followers"
      />
      <Start
        svg={followingsIcon}
        text="followings"
        count={following}
        path="followings"
      />
      <Start
        svg={public_repoIcon}
        text="Public repos"
        count={public_repos}
        path="public_repos"
      />
      <Start
        svg={public_gistsIcon}
        text="Public gists"
        count={public_gists}
        path="public_gists"
      />
    </div>
  );
};

export default StartSection;
