import * as React from 'react';

import { FileTable } from '../../components/fileTable';

import './styles.scss';

function Homepage() {
  return (
    <div className="homepage-border" data-test="homepage-border">
      <h1 data-test="homepage-title">File Table Demo</h1>
      <article data-test="homepage-description">
        <p>
          This demo application shows a table where every row is a file that can be selected and
          downloaded (files are not actually downloaded but shown in an alert message).
        </p>
        <p>
          It's a frontend demo developed with React.js, TypeScript, and SCSS. All the styles are
          done with CSS, it doesn't include style frameworks like Material-UI.
        </p>
        <p>It uses functional tests with Cypress, and it's developed with TDD.</p>
      </article>
      <FileTable />
    </div>
  );
}

export default Homepage;
