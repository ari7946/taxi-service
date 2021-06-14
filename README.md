## Coastal Yellow Cabs
Coastal Yellow Cabs enables users to book a taxi and recieve an instant estimate that is calculated by the distance and the type of cab requested. The admin may login and view every trip requested by users. Additionally, the admin can change the status of each trip. Users may register and/or login to view their own trips.

**Unauthenticated(not registered) User Books a Taxi**

![user books taxi GIF](http://g.recordit.co/DJ6g7fdx9j.gif)

**Admin Uses Panel**

![Admin demo GIF](http://g.recordit.co/gGvp601gPn.gif)

## Deployment

Client: [Coastal Yellow Cabs](https://mytaxicab.herokuapp.com/)

Server: [Server For Coastal Yellow Cabs](https://github.com/ari7946/backend-taxi-service)

## Tech Stack

#### Frontend Built Using:

- React.js
- Redux
- Dependencies:
    - [axios](https://github.com/axios/axios)
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

#### Using the Application

Requirements: 
- Node
- Package Manager (such as Yarn or npm)

Follow these steps to get the app running:

1. Fork and clone repo

2. Add an `.env` file at the root of the folder (same level as the `package.json` file). 

3. Add environmental variables for the frontend. 

4. Run `yarn` or `npm install` to install the necessary node_modules on the frontend. 

5. Run `yarn start` or `npm start` on the client folder to run the frontend on `localhost:3000`

6. The application should now be running.


## How Redux Is Used

- All the core redux functionality for this app is stored inside the "redux" directory. 

- The three main redux modules are "trips", "book", and "auth". Each module contains its own actions, reducer, selectors, and types. This organization encourages reusabilty across modules and React components. For instance, both users and admin use the "trips" redux module. The main difference being that only the admin can see every trip for every user and change the status of any trip, whereas a user can only see their own trips.

- The root-reducer, which combines "auth", "trips" and "book" reducers, is also located inside the redux directory alongside the store.
  
- The store uses the [redux-persist](https://www.npmjs.com/package/redux-persist) library to save the "auth" state in local storage. This ensures the user's authentication status persists even after a user refreshes the page or navigates to a different page.

- The [reselect](https://github.com/reduxjs/reselect) library is used to memoize functions that get state. Reselect provides a function called [createSelector](https://redux-toolkit.js.org/api/createSelector) to create these memoized selector functions. Selectors can be also be composed as shown below.
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

- [Reselect](https://github.com/reduxjs/reselect) also provides a function called [createStructuredSelector](https://github.com/reduxjs/reselect#createstructuredselectorinputselectors-selectorcreator--createselector) that takes an object and returns an object with the same keys, but with selectors replaced with their values. This is used throughout the app to map state to props. Here's an example.
```javascript
const mapStateToProps = createStructuredSelector({
  startAddress: selectStartAddress,
  endAddress: selectEndAddress,
})

export default connect(mapStateToProps)(Addresses);
```

- [Redux-logger](https://www.npmjs.com/package/redux-logger) is used to track state changes while in development mode.
```javascript
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
```

- [Redux Thunk](https://github.com/reduxjs/redux-thunk) is used to handle asynchronous logic that interacts with the store. Here's an example.
```javascript
export const updateTrip = (status, id) => {
  return async dispatch => {
    dispatch({ type: TripsActionTypes.SUBMIT, loadingType: status, tripId: id })
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_TRIPS}/api/trips/${id}`,
        { status },
        authHeaders
      );
      dispatch({ type: TripsActionTypes.UPDATE_TRIP, trip: result.data })
    } catch (error) {
      dispatch({ type: TripsActionTypes.ERROR, error })
    }
  }
}
```

- User authentication and authorization functionality is placed inside the "auth" redux component. Login and Register functionality is handled using redux thunks as follows
```javascript
export const userAuth = (authType, username, password, name = '', email = '', phone = '') => {

  return async dispatch => {
    dispatch({ type: AuthActionTypes.FETCH_USER });
    try {
      const result = authType === 'login'
        ? await axios.post(`${process.env.REACT_APP_TRIPS}/api/${authType}`, { username, password })
        // for user registration, "name", "email", and "phone" are not required. If
        // excluded, they default to empty strings
        : await axios.post(`${process.env.REACT_APP_TRIPS}/api/${authType}`, { username, password, name, email, phone })
      const { token } = result.data;
      dispatch({ type: AuthActionTypes.FETCH_SUCCESS, token, currentUser: username })
    } catch (error) {
      dispatch({ type: AuthActionTypes.ERROR, errorMesssage: error })
    }
  }
}
```

- Auth selectors are used throughout React components to conditionally render UI based
on authorized roles. Currently there are users and one admin.
```javascript
export const selectAuthRole = createSelector(
  [selectAuthState],
  authState => {
    if (!authState.currentUser) {
      return ''
    } else if (authState.currentUser === 'admin') {
      return 'admin'
    } else {
      return 'user'
    }
  }
)
```

- Another example of an auth selector is the "selectAuthHeaders". This selector, which uses includes a json web token for HTTP request headers, is used for booking taxis(both authenticated and unauthenticated users can book). It is also used for admin only authorized requests such as updating trip status and deleting trips. Further implementation of authorization is done in the [server API](https://github.com/ari7946/backend-taxi-service)
```javascript
export const selectAuthHeaders = createSelector(
  [selectAuthState],
  authState => {
    if (authState.token && authState.currentUser) {
      return {
        headers: {
          Authorization: authState.token
        }
      }
    }

  }
)
```