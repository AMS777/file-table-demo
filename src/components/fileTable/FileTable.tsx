import * as React from 'react';

import './styles.scss';

function FileTable() {
  return (
    <table id="file-table" data-test="file-table">
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
    </table>
  );
}

export default FileTable;
