import * as React from 'react';

import { File } from '../../interfaces';

interface FileTableBodyProps {
  files: File[];
}

function FileTableBody({ files = [] }: FileTableBodyProps) {
  return (
    <tbody>
      {files.map((file: File) => (
        <tr key={file.name} data-test="file-table-row">
          <td></td>
          <td>{file.name}</td>
          <td>{file.device}</td>
          <td>{file.path}</td>
          <td></td>
          <td>{file.status}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default FileTableBody;
