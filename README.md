# File table demo

This demo application shows a table where every row is a file that can be selected and downloaded (files are not actually downloaded but shown in an alert message).

It's a frontend demo developed with React.js, TypeScript, and SCSS. All the styles are done with CSS, it doesn't include style frameworks like Material-UI.

It uses functional tests with Cypress, and it's developed with TDD at the beginning. There is no complete test coverage as it's not necessary for demo purposes.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run cypress:open`

Opens the [Cypress](https://docs.cypress.io/guides/overview/why-cypress) application with functional tests.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
