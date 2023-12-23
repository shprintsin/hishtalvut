import { useMemo } from 'react';

export const DisplayedDocuments = (document, currentPage, itemsPerPage) => {
  return useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return document.slice(startIndex, startIndex + itemsPerPage);
  }, [document, currentPage, itemsPerPage]);
};
