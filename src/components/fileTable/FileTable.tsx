import * as React from 'react';
import { useState, useEffect } from 'react';

import { File } from '../../types';
import { filesFixture } from '../../fixtures';

import FileTableHead from './FileTableHead';
import FileTableBody from './FileTableBody';

import './styles.scss';

function FileTable() {
  const [files, setFiles] = useState<File[]>([]);
  const [selectedFiles, setSelectedFiles] = useState(new Set());

  useEffect(() => {
    setFiles(filesFixture);
  }, []);

  const handleSelectFile = (file: File) => {
    if (selectedFiles.has(file)) {
      selectedFiles.delete(file);
    } else {
      selectedFiles.add(file);
    }
    setSelectedFiles(new Set(selectedFiles));
  };

  return (
    <div id="file-table" data-test="homepage-border">
      <header>Selected {selectedFiles.size}</header>
      <table data-test="file-table">
        <FileTableHead />
        <FileTableBody files={files} handleSelectFile={handleSelectFile} />
      </table>
    </div>
  );
}

export default FileTable;
