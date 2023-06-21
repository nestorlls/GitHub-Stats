import React from 'react';
import Avatar from '../baseComponents/Avatar';
import Username from '../baseComponents/Username';
import FavoriteIcon from '../baseComponents/Favorite';
import { Link, useLocation } from 'react-router-dom';

const List = ({ list }) => {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col gap-2 w-full md:max-w-screen-sm">
      {list?.map((item) => (
        <Link to={`/favorites/${item.username || item.login}`} key={item.id}>
          <div
            key={item.id}
            className="w-full flex justify-between bg-gray-600 rounded-lg p-2 hover:scale-105">
            <div className="flex justify-center items-center gap-1">
              <div className="w-[70px]">
                <Avatar
                  avatar_url={item.avatar_url}
                  name={item.name || item.login}
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <Username
                  username={item.name || item.login}
                  size="xl"
                  font_weight="bold"
                />
                {item.username ||
                  (item.login && (
                    <Username username={item.username || item.login} />
                  ))}
              </div>
            </div>
            {pathname === '/favorites' && <FavoriteIcon isFavorite={true} />}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default List;
