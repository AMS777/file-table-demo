import * as React from 'react';

import { File } from '../../types';

import FileTableRow from './FileTableRow';

interface FileTableBodyProps {
  files: File[];
  selectedFiles: Set<File>;
  handleSelectFile: (file: File) => void;
}

function FileTableBody({ files = [], selectedFiles, handleSelectFile }: FileTableBodyProps) {
  return (
    <tbody>
      {files.map((file: File) => (
        <FileTableRow
          key={file.device}
          file={file}
          isRowSelected={selectedFiles.has(file)}
          handleSelectFile={handleSelectFile}
        />
      ))}
    </tbody>
  );
}

export default FileTableBody;
