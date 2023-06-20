import React from 'react';
import { Link } from 'react-router-dom';
import Language from '../baseComponents/Language';

const ListGists = ({ list }) => {
  return (
    <div className="flex flex-col gap-4 w-full md:max-w-screen-sm">
      {list.map(({ html_url, description, files, comments }) => (
        <Link to={html_url} key={html_url} target="_blank">
          <div className="w-full h-max flex flex-col bg-sky-800 rounded-lg p-4 hover:scale-105">
            <p className="text-white">{description}</p>
            <span className="text-white">Comments ({comments})</span>
            {Object.values(files).map(({ filename, type, language }, index) => (
              <div key={index} className="flex gap-4">
                <p className="text-bold text-white">{filename}</p>
                <div className="text-white">
                  <Language language={language} />
                </div>
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListGists;
