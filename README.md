
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `npm run test-flow`

Runs the static type checks.

## Folder structure

__dist:__ Contains the built files generated by the scripts (dev package, minified package and map)

__src:__ Contains an index file that requires all the modules that should be exported and all the source files that compound the package.

__src/components:__ Contains all the components used in the project 

## <a name="documentation"></a>Documenting the code

* Uses [documentation.js](https://github.com/documentationjs/documentation) to generate a JSON file to be consumed by another package (see the [documenting the code](#documentation) section) (TODO: Ingest it with [@mapbox/batfish](https://github.com/mapbox/batfish)?)

* The documentation follows the [JSDoc](http://usejsdoc.org/about-getting-started.html) syntax. 

* To get started you can read the documentation.js start guide [here](https://github.com/documentationjs/documentation/blob/master/docs/GETTING_STARTED.md) or take a look at the provided example file [here](https://github.com/geostarters/js-project-template/blob/master/src/geo/latlon.js)

## <a name="types"></a>Using types
Using flow provides a way to check for common syntax errors while calling functions. Flow provides a simple example of which kind of problems it can solve in their [Type Annotations guide](https://flow.org/en/docs/types/). There's also a list of annotations it supports there.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


