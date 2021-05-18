import * as React from 'react';

import { File } from '../../types';

import FileTableRow from './FileTableRow';

interface FileTableBodyProps {
  files: File[];
  handleSelectFile: (file: File) => void;
}

function FileTableBody({ files = [], handleSelectFile }: FileTableBodyProps) {
  return (
    <tbody>
      {files.map((file: File) => (
        <FileTableRow file={file} handleSelectFile={handleSelectFile} />
      ))}
    </tbody>
  );
}

export default FileTableBody;
