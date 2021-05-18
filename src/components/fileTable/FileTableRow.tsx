import * as React from 'react';
import { useState } from 'react';

import { File } from '../../interfaces';
import { FILE_STATUS_AVAILABLE } from '../../config/CONSTANTS';

interface FileTableRowProps {
  file: File;
}

function FileTableRow({ file }: FileTableRowProps) {
  const [isRowSelected, setIsRowSelected] = useState(false);

  const handleRowClick = () => setIsRowSelected(!isRowSelected);

  return (
    <tr
      key={file.name}
      className={isRowSelected ? 'file-table-row-selected' : ''}
      data-test="file-table-row"
      onClick={handleRowClick}
    >
      <td>
        <input type="checkbox" checked={isRowSelected} />
      </td>
      <td>{file.name}</td>
      <td>{file.device}</td>
      <td>{file.path}</td>
      <td>
        {file.status === FILE_STATUS_AVAILABLE && <span className="file-status-available"></span>}
      </td>
      <td className="file-table-status">{file.status}</td>
    </tr>
  );
}

export default FileTableRow;
