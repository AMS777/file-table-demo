import * as React from 'react';

function FileTableHead() {
  return (
    <thead>
      <tr>
        <th data-test="file-table-checkbox"></th>
        <th data-test="file-table-name">Name</th>
        <th data-test="file-table-device">Device</th>
        <th data-test="file-table-path">Path</th>
        <th data-test="file-table-status-icon"></th>
        <th data-test="file-table-status">Status</th>
      </tr>
    </thead>
  );
}

export default FileTableHead;
