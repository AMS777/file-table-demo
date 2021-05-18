import * as React from 'react';
import { useState, useEffect } from 'react';

import { File, FileStatus } from '../../types';
import { filesFixture } from '../../fixtures';

import FileTableHead from './FileTableHead';
import FileTableBody from './FileTableBody';

import DownloadIcon from '../../images/download.svg';

import './styles.scss';

function FileTable() {
  const [files, setFiles] = useState<File[]>([]);
  const [isSelectAllChecked, setIsSelectAllChecked] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState(new Set<File>());

  useEffect(() => {
    setFiles(filesFixture);
  }, []);

  useEffect(() => {
    const selectAllCheckbox: HTMLInputElement = document.querySelector(
      '#file-table .select-all-checkbox',
    )!;
    selectAllCheckbox.indeterminate = false;

    if (selectedFiles.size === 0) {
      setIsSelectAllChecked(false);
      return;
    }
    if (selectedFiles.size === files.length) {
      setIsSelectAllChecked(true);
      return;
    }

    selectAllCheckbox.indeterminate = true;
  }, [selectedFiles, files]);

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
        <input type="checkbox" className="select-all-checkbox" checked={isSelectAllChecked} />
        <span className="selected-files-count">
          {selectedFiles.size === 0 ? 'None Selected' : `Selected ${selectedFiles.size}`}
        </span>
        <button onClick={handleDownloadFiles}>
          <img src={DownloadIcon} alt="icon" />
          Download Selected
        </button>
      </header>
      <table data-test="file-table">
        <FileTableHead />
        <FileTableBody files={files} handleSelectFile={handleSelectFile} />
      </table>
    </div>
  );
}

export default FileTable;
