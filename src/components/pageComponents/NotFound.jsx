import { BsGithub } from 'react-icons/bs';

const NotFound = ({ error, loading }) => {
  const animate = loading?.includes('Retrieving') ? 'animate-spin' : '';

  return (
    <div className="flex flex-col gap-4 w-full items-center text-white">
      <BsGithub size={100} className={animate} />
      <p className="text-2xl">{loading || 'Not found'}</p>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default NotFound;
