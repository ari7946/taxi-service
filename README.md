## Deployment

Client: [Coastal Yellow Cabs](https://mytaxicab.herokuapp.com/)

Server: [Server For Coastal Yellow Cabs](https://github.com/ari7946/backend-taxi-service)

## Tech Stack

#### Frontend Built Using:

- React.js
- Redux
- Dependencies:
    - [Axios](https://github.com/axios/axios)
    - [bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
    - [reactstrap](https://reactstrap.github.io/)
    - [cross-env](https://www.npmjs.com/package/cross-env)
    - [@fortawesome/fontawesome-svg-core](https://fontawesome.com/how-to-use/on-the-web/advanced/svg-javascript-core)
    - [@fortawesome/free-solid-svg-icons](https://github.com/FortAwesome/Font-Awesome/tree/master/js-packages/%40fortawesome/free-solid-svg-icons)
    - [@fortawesome/react-fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)
    - [react](https://reactjs.org/docs/getting-started.html)
    - [redux](https://redux.js.org/)
    - [react-redux](https://react-redux.js.org/)
    - [redux-logger](https://www.npmjs.com/package/redux-logger)
    - [redux-persist](https://www.npmjs.com/package/redux-persist)
    - [redux-thunk](https://github.com/reduxjs/redux-thunk)
    - [react-router-dom](https://www.npmjs.com/package/react-router-dom)
    - [reselect](https://github.com/reduxjs/reselect)
- [TOMTOM Maps Api](https://developer.tomtom.com/tomtom-maps-apis-developers)

- [Heroku](https://www.heroku.com/)

## Installation Instructions

#### Environmental Variables:
    - REACT_APP_API_KEY= please see [TOMTOM MAPS API](https://developer.tomtom.com/tomtom-maps-apis-developers) to get an API key
    - PUBLIC_URL="https://mytaxicab.herokuapp.com/"

##### Using the Application

Requirements: 
- Node
- Package Manager (such as Yarn or npm)
    - [**Yarn**](https://yarnpkg.com/en/) was used to build this project.

Have Node? Have **Yarn** or **npm**?
Follow these steps:

1. Fork and clone repo

2. Add an `.env` file at the root of the folder (same level as the `package.json` file). 

3. Add environmental variables for the frontend. 

4. Run `yarn` or `npm install` to install the necessary node_modules on the frontend. 

5. Run `yarn start` or `npm start` on the client folder to run the frontend on `localhost:3000`

6. The application should now be running.