import React from 'react';
import NotFound from './NotFound';
import GitHubCard from './GitHubCard';

const UserCard = ({ data, error, loading }) => {
  return (
    <div className="w-full mt-2">
      {!data ? (
        <>
          <NotFound loading={loading} error={error} />
        </>
      ) : (
        <>
          <GitHubCard {...data} />
        </>
      )}
    </div>
  );
};

export default UserCard;
