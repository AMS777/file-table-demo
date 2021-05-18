import * as React from 'react';
import { useState, useEffect } from 'react';

import { File } from '../../types';
import { filesFixture } from '../../fixtures';

import FileTableHead from './FileTableHead';
import FileTableBody from './FileTableBody';

import './styles.scss';

function FileTable() {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    setFiles(filesFixture);
  }, []);

  return (
    <div id="file-table" data-test="homepage-border">
      <header>Selected</header>
      <table data-test="file-table">
        <FileTableHead />
        <FileTableBody files={files} />
      </table>
    </div>
  );
}

export default FileTable;
