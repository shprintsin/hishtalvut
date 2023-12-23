import {
  FaDownLong,
  FaUpRightFromSquare,
} from 'react-icons/fa6';

export const FileDownloadIcon = ({ doc }) => {
  return (
    <>
      {(doc.is_external && doc.DownloadLink) ? <FaUpRightFromSquare /> : (doc.DownloadLink && <FaDownLong />)}
    </>
  );
};
