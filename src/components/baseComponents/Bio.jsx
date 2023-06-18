import React from 'react';

const Bio = ({ bio }) => {
  return (
    <div className="flex justify-center items-center text-white text-center p-1">
      {bio}
    </div>
  );
};

export default Bio;
