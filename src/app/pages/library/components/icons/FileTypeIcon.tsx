import {
  FaFile,
  FaFileArchive,
  FaFileCsv,
  FaFileExcel,
  FaFilePdf,
  FaFilePowerpoint,
  FaFileWord,
} from 'react-icons/fa';

export const FileTypeIcon = ({ doc }) => {
  return (
    <>
      {doc.extension === 'pdf' && <FaFilePdf />}
      {(doc.extension === 'doc' || doc.extension === 'docx') && <FaFileWord />}
      {doc.extension === 'csv' && <FaFileCsv />}
      {(doc.extension === 'zip' || doc.extension === 'rar') && <FaFileArchive />}
      {(doc.extension === 'html' || doc.extension === 'htm') && <FaFile />}
      {(!doc.extension || doc.extension === '') && <FaFile />}
      {(doc.extension === 'xls' || doc.extension === 'xlsx') && <FaFileExcel />}
      {(doc.extension === 'pptx' || doc.extension === 'ppt') && <FaFilePowerpoint />}
    </>
  );
};
