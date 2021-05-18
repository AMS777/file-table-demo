import { useState, useEffect } from 'react';

import { File } from '../../types';
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
