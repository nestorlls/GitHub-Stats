import { Link, useLocation, useParams } from 'react-router-dom';

function convertToK(count) {
  const convertedToString = count.toString();
  const converted =
    convertedToString.length > 3
      ? convertedToString.slice(0, 2) + 'k'
      : convertedToString;
  return converted;
}

const Start = ({ svg, text, count, path, user }) => {
  const transformedCount = convertToK(count);
  const { username } = useParams();
  const { pathname } = useLocation();

  const ref =
    pathname === '/' ? `/${user}/${path}` : `/favorites/${username}/${path}`;

  return (
    <Link to={ref} key={username ?? user}>
      <div className="w-[140px] h-[140px] bg-white p-4 rounded flex flex-col justify-center items-center">
        <img src={svg} alt={text} />
        <span className="text-2xl font-bold">{transformedCount}</span>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default Start;
