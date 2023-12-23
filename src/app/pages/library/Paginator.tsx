import { useMemo } from "react";
import Button from "react-bootstrap/Button";

export const Paginator = ({documents,currentPage, onPageChange,itemsPerPage}:{
  documents:any[],
  currentPage:number,
  onPageChange: (pageNumber: number) => void,
  itemsPerPage:number}) =>
{  const totalPages = Math.ceil(documents.length / itemsPerPage);


return (
  <div>
    {Array.from({ length: totalPages }, (_, i) => (
      <Button
        key={i + 1}
        onClick={() => onPageChange(i + 1)}
        disabled={currentPage === (i + 1)}
      >
        {i + 1}
      </Button>
    ))}
  </div>
)};

