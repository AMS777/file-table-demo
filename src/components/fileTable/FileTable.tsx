import * as React from 'react';

import { useFileTable } from './hooks';

import FileTableToolbar from './FileTableToolbar';
import FileTableHead from './FileTableHead';
import FileTableBody from './FileTableBody';

import './styles.scss';

function FileTable() {
  const { files, selectedFiles, handleSelectFile, handleSelectAllFiles } = useFileTable();

  return (
    <div id="file-table" data-test="homepage-border">
      <FileTableToolbar
        files={files}
        selectedFiles={selectedFiles}
        handleSelectAllFiles={handleSelectAllFiles}
      />
      <table data-test="file-table">
        <FileTableHead />
        <FileTableBody
          files={files}
          selectedFiles={selectedFiles}
          handleSelectFile={handleSelectFile}
        />
      </table>
    </div>
  );
}

export default FileTable;
