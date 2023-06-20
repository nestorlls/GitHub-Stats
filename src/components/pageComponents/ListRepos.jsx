import React from 'react';
import { Link } from 'react-router-dom';
import Frame from '../compositeComponents/Frame';
import Repo from '../compositeComponents/Repo';

const ListRepos = ({ list }) => {
  return (
    <div className="flex flex-col gap-2 w-full md:max-w-screen-sm">
      {list?.map(
        ({
          full_name,
          description,
          language,
          stargazers_count,
          forks_count,
          html_url,
        }) => (
          <Link to={html_url} key={full_name} target="_blank">
            <div className="w-full h-40 flex flex-col bg-gray-600 rounded-lg p-4 hover:scale-105 gap-4">
              <Repo full_name={full_name} description={description} />
              <Frame
                language={language}
                stargazers_count={stargazers_count}
                forks_count={forks_count}
              />
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default ListRepos;
