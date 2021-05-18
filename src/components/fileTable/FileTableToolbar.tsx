import * as React from 'react';
import { useState, useEffect } from 'react';

import { File, FileStatus } from '../../types';

import DownloadIcon from '../../images/download.svg';

import './styles.scss';

interface FileTableToolbarProps {
  files: File[];
  selectedFiles: Set<File>;
  handleSelectAllFiles: () => void;
}

function FileTableToolbar({ files, selectedFiles, handleSelectAllFiles }: FileTableToolbarProps) {
  const [isSelectAllChecked, setIsSelectAllChecked] = useState(false);

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
    <header>
      <input
        type="checkbox"
        className="select-all-checkbox"
        checked={isSelectAllChecked}
        onChange={handleSelectAllFiles}
      />
      <span className="selected-files-count">
        {selectedFiles.size === 0 ? 'None Selected' : `Selected ${selectedFiles.size}`}
      </span>
      <button onClick={handleDownloadFiles}>
        <img src={DownloadIcon} alt="icon" />
        Download Selected
      </button>
    </header>
  );
}

export default FileTableToolbar;
