import { useState } from 'react';

import { expandIcon } from './components/icons/expandIcon';
import { FileDownloadIcon } from './components/icons/FileDownloadIcon';
import { FileTypeIcon } from './components/icons/FileTypeIcon';

export function ListItemRow(doc, index) {
  const [expandRow, setExpandRow] = useState(false);
  const handleClick = () => setExpandRow(!expandRow);

  return (
    <div
      key={index}
      onClick={handleClick}
      className="p-1 cursor-pointer border-b border-gray-200 hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 group"
    >

      <div className="flex flex-row justify-between items-center py-2 group">
        <span className='text-xl text-blue-500 transition-transform duration-300  group-hover:scale-110  group-hover:text-blue-800 transition-colors duration-300 group'>
          {expandIcon(expandRow)}
        </span>

        {/* Title and Year */}
        <div className="flex-1 px-2">
          <div className="font-bold block text-lg text-black">{doc.title}</div>
          <div className="text-gray-500 text-sm">{doc.year_of_publication}</div>
        </div>
        {/* File Type Icons */}
        <div className="flex flex-row items-center justify-center px-2">
          <div className="text-gray-600 hover:text-sky-500 active:text-deep-blue-600 transition-colors duration-300">
            <FileTypeIcon doc={doc} />

          </div>
        </div>
        {/* Authors and Publisher */}
        <div className="flex-1 px-2">
          <div className="text-gray-800">{doc.authors}</div>
          <div className="text-gray-800">{doc.publisher}</div>
        </div>

        {/* Topic and Date */}
        <div className="flex-1 px-2">
          <div className="text-gray-800">{doc.topic}</div>
          <div className="text-gray-800">{doc.date}</div>
        </div>
        {/* Link Icons */}
        <div className="flex flex-row items-center justify-center px-2 group">
          <div className="flex items-center text-xl text-blue-500 transition-transform duration-300 hover:translate-y-1 hover:text-blue-800 transition-colors duration-300 group">
            <FileDownloadIcon doc={doc} className="" />
            {/* <div className="ml-2 text-transparent group-hover:text-gray-800 transition-color duration-300">Download</div> */}
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      {expandRow && (
        <div className="p-2 transition-height duration-300 ease-in-out">
          {doc.content}
        </div>
      )}
    </div>
  );
}
