import * as React from 'react';
import { useState, useEffect } from 'react';

import './styles.scss';

interface File {
  name: string;
  device: string;
  path: string;
  status: string;
}

function FileTable() {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    setFiles([
      {
        name: 'smss.exe',
        device: 'Stark',
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
        status: 'scheduled',
      },
      {
        name: 'netsh.exe',
        device: 'Targaryen',
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
        status: 'available',
      },

      {
        name: 'uxtheme.dll',
        device: 'Lanniester',
        path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
        status: 'available',
      },

      {
        name: 'cryptbase.dll',
        device: 'Martell',
        path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll',
        status: 'scheduled',
      },

      {
        name: '7za.exe',
        device: 'Baratheon',
        path: '\\Device\\HarddiskVolume1\\temp\\7za.exe',
        status: 'scheduled',
      },
    ]);
  }, []);

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
    </table>
  );
}

export default FileTable;
