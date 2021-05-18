import * as React from 'react';
import { useState } from 'react';

import { File, FileStatus } from '../../types';

interface FileTableRowProps {
  file: File;
  handleSelectFile: (file: File) => void;
}

function FileTableRow({ file, handleSelectFile }: FileTableRowProps) {
  const [isRowSelected, setIsRowSelected] = useState(false);

  const handleRowClick = () => {
    setIsRowSelected(!isRowSelected);
    handleSelectFile(file);
  };

  return (
    <tr
      key={file.name}
      className={isRowSelected ? 'file-table-row-selected' : ''}
      data-test="file-table-row"
      onClick={handleRowClick}
    >
      <td>
        <input type="checkbox" checked={isRowSelected} readOnly />
      </td>
      <td>{file.name}</td>
      <td>{file.device}</td>
      <td>{file.path}</td>
      <td>
        {file.status === FileStatus.Available && <span className="file-status-available"></span>}
      </td>
      <td className="file-table-status">{file.status}</td>
    </tr>
  );
}

export default FileTableRow;
