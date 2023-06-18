import React from 'react';
import Avatar from '../baseComponents/Avatar';
import Username from '../baseComponents/Username';
import Favorite from '../baseComponents/Favorite';
import { Link } from 'react-router-dom';

const FavoriteCard = ({ favorites }) => {
  return (
    <div className="flex flex-col gap-2 w-full md:max-w-screen-sm">
      {favorites?.map((favorite) => (
        <Link to={`/favorites/${favorite.username}`} key={favorite.id}>
          <div
            key={favorite.id}
            className="w-full flex justify-between bg-gray-600 rounded-lg p-2 hover:scale-105">
            <div className="flex justify-center items-center gap-1">
              <div className="w-[70px]">
                <Avatar avatar_url={favorite.avatar_url} name={favorite.name} />
              </div>
              <div className="flex flex-col justify-start items-start">
                <Username
                  username={favorite.name}
                  size="xl"
                  font_weight="bold"
                />
                <Username username={favorite.username} />
              </div>
            </div>
            <Favorite isFavorite={true} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FavoriteCard;
