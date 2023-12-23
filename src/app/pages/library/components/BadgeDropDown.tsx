

export const BadgeDropDown = ({ label, onRemove }) => (
  <span className="">
    <button
      onClick={onRemove}
      className="inline-flex items-center text-white text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded ml-2 hover:bg-blue-600 text-white rounded-full p-1"
    >
      {`X  ${label}`}
      x
    </button>
  </span>
);
