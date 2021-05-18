import * as React from 'react';
import { useState, useEffect } from 'react';

import { File, FileStatus } from '../../types';
import { filesFixture } from '../../fixtures';

import FileTableHead from './FileTableHead';
import FileTableBody from './FileTableBody';

import './styles.scss';

function FileTable() {
  const [files, setFiles] = useState<File[]>([]);
  const [selectedFiles, setSelectedFiles] = useState(new Set<File>());

  useEffect(() => {
    setFiles(filesFixture);
  }, []);

  const handleSelectFile = (file: File) => {
    if (selectedFiles.has(file)) {
      selectedFiles.delete(file);
    } else {
      selectedFiles.add(file);
    }
    setSelectedFiles(new Set<File>(selectedFiles));
  };

  const handleDownloadFiles = () => {
    const selectedFilesWithAvailableStatus: File[] = Array.from(selectedFiles).filter(
      (file: File) => file.status === FileStatus.Available,
    );

    if (selectedFilesWithAvailableStatus.length > 0) {
      alert(
        selectedFilesWithAvailableStatus.reduce(
          (message: string, file: File) => `${message}- ${file.device}: ${file.path}\n`,
          'Available files to download:\n\n',
        ),
      );
    } else {
      alert('There are no selected available files to download.');
    }
  };

  return (
    <div id="file-table" data-test="homepage-border">
      <header>
        Selected {selectedFiles.size}{' '}
        <button onClick={handleDownloadFiles}>Download Selected</button>
      </header>
      <table data-test="file-table">
        <FileTableHead />
        <FileTableBody files={files} handleSelectFile={handleSelectFile} />
      </table>
    </div>
  );
}

export default FileTable;
