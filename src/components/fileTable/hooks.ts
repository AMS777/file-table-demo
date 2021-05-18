import { useState, useEffect } from 'react';

import { File, FileStatus } from '../../types';
import { filesFixture } from '../../fixtures';

export function useFileTable() {
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

  const handleSelectAllFiles = () => {
    if (selectedFiles.size === files.length) {
      selectedFiles.clear();
    } else {
      files.forEach((file: File) => selectedFiles.add(file));
    }
    setSelectedFiles(new Set<File>(selectedFiles));
  };

  return { files, selectedFiles, handleSelectFile, handleSelectAllFiles };
}

export function useFileTableToolbar(files: File[], selectedFiles: Set<File>) {
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

  const makeSelectedFilesCountCaption = () =>
    selectedFiles.size === 0 ? 'None Selected' : `Selected ${selectedFiles.size}`;

  return { isSelectAllChecked, handleDownloadFiles, makeSelectedFilesCountCaption };
}
