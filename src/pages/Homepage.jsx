import * as React from 'react';

function Homepage() {
  return (
    <>
      <h1 data-test="homepage-title">File Table Demo</h1>
      <article data-test="homepage-description">
        <p>
          This demo shows a table where every row is a file that can be selected and downloaded.
        </p>
        <p>
          It's a frontend demo developed with React.js. It doesn't include style frameworks like
          Material-UI.
        </p>
        <p>It uses functional tests with Cypress.</p>
      </article>
    </>
  );
}

export default Homepage;