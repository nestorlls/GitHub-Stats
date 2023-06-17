import { BsGithub } from 'react-icons/bs';

const NotFound = ({ error, loading }) => {
  return (
    <div className="flex flex-col gap-4 w-full items-center text-white">
      <BsGithub size={100} />
      <p className="text-2xl">{loading}</p>
      <p className="text-red-500">{error}</p>
    </div>
  );
};

export default NotFound;
