export const urls = {
  homepage: '/',
};

export const ids = {
  homepage: {
    border: '[data-test=homepage-border]',
    title: '[data-test=homepage-title]',
    description: '[data-test=homepage-description]',
  },
  fileTable: {
    table: '[data-test=file-table]',
    columns: {
      checkbox: '[data-test=file-table-checkbox]',
      name: '[data-test=file-table-name]',
      device: '[data-test=file-table-device]',
      path: '[data-test=file-table-path]',
      status: '[data-test=file-table-status]',
      statusIcon: '[data-test=file-table-status-icon]',
    },
  },
};
