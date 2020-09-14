## Coastal Yellow Cabs
Coastal Yellow Cabs enables users to book a taxi and recieve an instant estimate that is calculated by the distance and the type of cab requested. The admin may login and view every trip requested by users. Additionally, the admin can change the status of each trip. Users may register and/or login to view their own trips.

**User Books a Taxi**

![User demo GIF](http://g.recordit.co/oSHrUYcmHU.gif)

**Admin Uses Panel**

![Admin demo GIF](http://g.recordit.co/bKB5LmxX4Z.gif)

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


##### How Redux is used

- All the core redux functionality for this app is stored inside the "redux" directory. 

- The two main components are "trips" and "book". Each component contains its own actions, reducers, selectors, and types.

- The root-reducer, which combines both "trips" and "book" reducers, is also located inside the redux directory alongside the store.

- The store uses the [redux-persist](https://www.npmjs.com/package/redux-persist) library to save the "book" state in local storage. This ensures the state maintains its state even when a user refreshes the page
or navigates to a different page.

- The [reselect](https://github.com/reduxjs/reselect) library is used to memoize functions that get state. Reselect provides a function called `createSelector` to create these memorized selectors. Selectors can be also be composed shown below.
```javascript
export const selectAllTrips = createSelector(
  [selectTripState],
  tripState => tripState.trips
)

export const selectCompletedTrips = 
  createSelector(
    [selectAllTrips],
    trips => trips.filter(trip => 
      trip.status === 'complete'
    )
)

```

- [Reselect](https://github.com/reduxjs/reselect) also provides a function called [createStructuredSelector](https://github.com/reduxjs/reselect#createstructuredselectorinputselectors-selectorcreator--createselector) that takes an object and returns an object with the same keys, but with selectors replaced with their values. This is used throughout. Here's an example.
```javascript
const mapStateToProps = createStructuredSelector({
  startAddress: selectStartAddress,
  endAddress: selectEndAddress,
})

export default connect(mapStateToProps)(Addresses);
```