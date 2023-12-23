import { useCallback, useMemo } from 'react';
import Fuse from "fuse.js";

export const useDocumentFilter = (documents, filterConfig, sortOrder) => {
  // Initialize Fuse for fuzzy searching
  const fuse = useMemo(() => new Fuse(documents, {
    keys: ['title', 'authors', 'date'],
    includeScore: true
  }), [documents]);
  // Function to check if a document matches the filter criteria
  const documentMatchesCriteria = useCallback((doc) => {

    const isPDF = !filterConfig.showPDFsOnly || doc.pdfLink.endsWith('.pdf');
    const yearMatches = !filterConfig.filterYearFrom || parseInt(doc.year_of_publication) >= parseInt(filterConfig.filterYearFrom);
    const beforeYearMatches = !filterConfig.filterBeforeYear || parseInt(doc.year_of_publication) < parseInt(filterConfig.filterBeforeYear);
    const publisherMatches = !Object.values(filterConfig.selectedPublishers).some(val => val) || filterConfig.selectedPublishers[doc.publisher];
    const topicMatches = filterConfig.selectedTopics.length === 0 || filterConfig.selectedTopics.includes(doc.topic);
    return isPDF && yearMatches && beforeYearMatches && publisherMatches && topicMatches;
  }, [filterConfig]);
  // Filter documents based on query and other criteria
  return useMemo(() => {
    // If there's a query, use Fuse to filter, else use all documents
    const docsToFilter = filterConfig.query ? fuse.search(filterConfig.query).map(result => result.item) : documents;
    // Further filter the documents based on other criteria
    // Sorting logic
    if (sortOrder === 'fromOldToNew') {
      docsToFilter.sort((a, b) => parseInt(a.year_of_publication) - parseInt(b.year_of_publication));
    } else if (sortOrder === 'fromNewToOld') {
      docsToFilter.sort((a, b) => parseInt(b.year_of_publication) - parseInt(a.year_of_publication));
    }

    return docsToFilter.filter(documentMatchesCriteria);
  }, [documents, fuse, filterConfig, documentMatchesCriteria, sortOrder]);
};
