import * as React from 'react';

import { File } from '../../interfaces';

import FileTableRow from './FileTableRow';

interface FileTableBodyProps {
  files: File[];
}

function FileTableBody({ files = [] }: FileTableBodyProps) {
  return (
    <tbody>
      {files.map((file: File) => (
        <FileTableRow file={file} />
      ))}
    </tbody>
  );
}

export default FileTableBody;
