import { FaSearch } from "react-icons/fa";

export const SearchInput = ({ filter }) => {
  const handleSearchLibrary = (event) => { setFilterConfig(prev => ({ ...prev, query: event.target.value })); };

  return (
    <div className="w-4/5 relative">
      <input
        type="text"
        placeholder="Search documents..."
        value={filter}

        onChange={handleSearchLibrary}
        className="w-full py-3 px-4 pr-10 border
          border-gray-500 bg-gray-800 text-white leading-tight
          focus:outline-none focus:bg-gray-700 focus:border-gray-300
          hover:border-gray-300"/>
      <button type="submit" className="
    text-white absolute left-0 top-0 mt-3 mx-3">
        <FaSearch />
      </button>
    </div>
  );
};
