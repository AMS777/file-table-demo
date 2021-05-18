import * as React from 'react';

import { File } from '../../types';

import { useFileTableToolbar } from './hooks';

import DownloadIcon from '../../images/download.svg';

import './styles.scss';

interface FileTableToolbarProps {
  files: File[];
  selectedFiles: Set<File>;
  handleSelectAllFiles: () => void;
}

function FileTableToolbar({ files, selectedFiles, handleSelectAllFiles }: FileTableToolbarProps) {
  const { isSelectAllChecked, handleDownloadFiles, makeSelectedFilesCountCaption } =
    useFileTableToolbar(files, selectedFiles);

  return (
    <header>
      <input
        type="checkbox"
        className="select-all-checkbox"
        checked={isSelectAllChecked}
        onChange={handleSelectAllFiles}
      />
      <span className="selected-files-count">{makeSelectedFilesCountCaption()}</span>
      <button onClick={handleDownloadFiles}>
        <img src={DownloadIcon} alt="icon" />
        Download Selected
      </button>
    </header>
  );
}

export default FileTableToolbar;
