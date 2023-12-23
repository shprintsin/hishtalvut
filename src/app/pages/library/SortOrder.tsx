import { useState } from 'react';
import { FaSortNumericDown, FaSortNumericUp } from "react-icons/fa";

export const SortOrder = ({ sortOrder, setSortOrder }) => {
  const [clicked, setClicked] = useState(false);

  const handleSortOrder = () => {
    setClicked(!clicked);
    setSortOrder(clicked ? 'fromNewToOld' : 'fromOldToNew');
  };

  const SortIcon = () => (
    <>
      {clicked ? <FaSortNumericDown /> : <FaSortNumericUp />}
    </>
  );

  return (
    <div className="flex items-center">
      <button onClick={handleSortOrder} className="">
        {clicked ? 'From New to old' : 'From Old to New'}
        <SortIcon />
      </button>
    </div>
  );
};
