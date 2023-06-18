import React from 'react';

const Avatar = ({ avatar_url, name, size }) => {
  return (
    <div className="flex justify-center items-center p-1">
      <img
        src={avatar_url}
        alt={name}
        className={`rounded-full object-cover w-48 md:w-${size} md:h-${size}`}
      />
    </div>
  );
};

export default Avatar;
