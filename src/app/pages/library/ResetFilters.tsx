import { FaXmark } from 'react-icons/fa6';

export function ResetFilters({ setFilterConfig }) {
  const resetFilter = () => {
    setFilterConfig({ setFilterConfig });
  };

  return (
    <button
      onClick={resetFilter}
      title='Reset filters'
      className="border p-1 bg-blue-500 text-white">
      <FaXmark />
    </button>
  );
}
