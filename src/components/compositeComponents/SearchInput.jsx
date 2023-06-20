import Input from '../baseComponents/Input';

const SearchInput = ({ handleChange }) => {
  return (
    <div className="w-2/3 mt-2 md:mt-2">
      <Input
        type="text"
        name="search"
        placeholder="Search by username"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
