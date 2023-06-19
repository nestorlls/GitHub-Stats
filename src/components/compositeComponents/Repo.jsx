const Repo = ({ full_name, description }) => {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <p className="text-xl font-bold text-gray-200">{full_name}</p>
      <p className="text-md text-gray-300">{description}</p>
    </div>
  );
};

export default Repo;
