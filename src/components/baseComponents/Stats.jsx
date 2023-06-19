import React from 'react';

const Stats = ({ svg, publics }) => {
  return (
    <div className="flex gap-2 text-white">
      <span className="text-white">{svg}</span>
      <p>{publics}</p>
    </div>
  );
};

export default Stats;
