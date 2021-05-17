import * as React from 'react';

import { File } from '../../interfaces';
import { FILE_STATUS_AVAILABLE } from '../../config/CONSTANTS';

interface FileTableBodyProps {
  files: File[];
}

function FileTableBody({ files = [] }: FileTableBodyProps) {
  return (
    <tbody>
      {files.map((file: File) => (
        <tr key={file.name} data-test="file-table-row">
          <td>
            <input type="checkbox" />
          </td>
          <td>{file.name}</td>
          <td>{file.device}</td>
          <td>{file.path}</td>
          <td>
            {file.status === FILE_STATUS_AVAILABLE && (
              <span className="file-status-available"></span>
            )}
          </td>
          <td className="file-table-status">{file.status}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default FileTableBody;
