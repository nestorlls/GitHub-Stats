import Language from '../baseComponents/Language';
import Stats from '../baseComponents/Stats';

const star = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);

const gitFork = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 60 60"
    className="w-6 h-6">
    <path
      d="M17.5 30H36.25C40.6926 30 44.3618 26.6892 44.9251 22.4003C40.7213 21.7618 37.5 18.1321 37.5 13.75C37.5 8.91751 41.4175 5 46.25 5C51.0825 5 55 8.91751 55 13.75C55 18.1789 51.7095 21.8392 47.4399 22.4198C46.8548 28.0833 42.0682 32.5 36.25 32.5H17.5V37.5886C21.7404 38.1951 25 41.8419 25 46.25C25 51.0825 21.0825 55 16.25 55C11.4175 55 7.5 51.0825 7.5 46.25C7.5 41.8419 10.7596 38.1951 15 37.5886V22.4114C10.7596 21.8049 7.5 18.1581 7.5 13.75C7.5 8.91751 11.4175 5 16.25 5C21.0825 5 25 8.91751 25 13.75C25 18.1581 21.7404 21.8049 17.5 22.4114V30ZM10 46.25C10 49.7018 12.7982 52.5 16.25 52.5C19.7018 52.5 22.5 49.7018 22.5 46.25C22.5 42.7982 19.7018 40 16.25 40C12.7982 40 10 42.7982 10 46.25ZM10 13.75C10 17.2018 12.7982 20 16.25 20C19.7018 20 22.5 17.2018 22.5 13.75C22.5 10.2982 19.7018 7.5 16.25 7.5C12.7982 7.5 10 10.2982 10 13.75ZM46.25 7.5C42.7982 7.5 40 10.2982 40 13.75C40 17.2018 42.7982 20 46.25 20C49.7018 20 52.5 17.2018 52.5 13.75C52.5 10.2982 49.7018 7.5 46.25 7.5Z"
      fill="white"
    />
  </svg>
);
const Frame = ({ language, stargazers_count, forks_count }) => {
  return (
    <div className="flex gap-4 w-64 justify-between">
      <Language language={language} />
      <Stats svg={star} publics={stargazers_count} />
      <Stats svg={gitFork} publics={forks_count} />
    </div>
  );
};

export default Frame;