## Coastal Yellow Cabs

Coastal Yellow Cabs enables users to book a taxi and recieve an instant estimate that is calculated by the distance and the type of cab requested. The admin may login and view every trip requested by users. Additionally, the admin can change the status of each trip. Users may register and/or login to view their own trips.

**User Books a Taxi**
![user books taxi GIF](http://g.recordit.co/qhgkdt7axb.gif)

**Admin Uses Panel**

![Admin demo GIF](http://g.recordit.co/ccMSLuMIta.gif)

## Deployment

Client: [Coastal Yellow Cabs](https://taxi-service.vercel.app/)

Server: [Server For Coastal Yellow Cabs](https://github.com/ari7946/backend-taxi-service)

## Tech Stack

#### Frontend Built Using:

- Styled Components
- React
- Next
- Redux
- Dependencies:

  - [axios](https://github.com/axios/axios)
  - [cross-env](https://www.npmjs.com/package/cross-env)
  - [@fortawesome/fontawesome-svg-core](https://fontawesome.com/how-to-use/on-the-web/advanced/svg-javascript-core)
  - [@fortawesome/free-solid-svg-icons](https://github.com/FortAwesome/Font-Awesome/tree/master/js-packages/%40fortawesome/free-solid-svg-icons)
  - [@fortawesome/react-fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)
  - [react](https://reactjs.org/docs/getting-started.html)
  - [redux](https://redux.js.org/)
  - [next](https://www.npmjs.com/package/next)
  - [react-dom](https://www.npmjs.com/package/react-dom)
  - [react-redux](https://react-redux.js.org/)
  - [redux-logger](https://www.npmjs.com/package/redux-logger)
  - [redux-persist](https://www.npmjs.com/package/redux-persist)
  - [redux-thunk](https://github.com/reduxjs/redux-thunk)
  - [react-router-dom](https://www.npmjs.com/package/react-router-dom)
  - [reselect](https://github.com/reduxjs/reselect)
  - [styled-components](https://www.npmjs.com/package/styled-components)
  - [styled-normalize](https://www.npmjs.com/package/styled-normalize)
  - [styled-system](https://www.npmjs.com/package/styled-system)
  - [react-modal](https://www.npmjs.com/package/react-modal)
  - [react-text-transition](https://www.npmjs.com/package/react-text-transition)
  - [react-transition-group](https://www.npmjs.com/package/react-transition-group)

- [TOMTOM Maps Api](https://developer.tomtom.com/tomtom-maps-apis-developers)

- [Vercel](https://vercel.com/)

## Installation Instructions

#### Environmental Variables:

    - REACT_APP_API_KEY= please see [TOMTOM MAPS API](https://developer.tomtom.com/tomtom-maps-apis-developers) to get an API key

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

- There are three main Redux modules/slices: Auth, Book, and Trips. Each redux module is placed in their respective feature folder, colocated with components that consume redux functionality. This colocation allows components and each redux module to easily share types. Also, I think it provides a more intuitive experience when creating new features.

- Each module contains its own actions, reducer, selectors, and types. This organization allows for reusability across other Redux modules and React components. For instance, both users and admin use the trips redux module. Another example is the auth module, in that it's used throughout the app for authentication(permission based) and also as part of the headers for HTTP requests.

- The root-reducer combines "auth", "trips" and "book" reducers.
- The store uses the [redux-persist](https://www.npmjs.com/package/redux-persist) library to save the "auth" state in local storage. This ensures the user's authentication status persists even after a user refreshes the page or navigates to a different website.

- The [reselect](https://github.com/reduxjs/reselect) library supplies memoized functions that get state. Specifically, a function called [createSelector](https://redux-toolkit.js.org/api/createSelector) creates these memoized selector functions. Selectors can be composed as shown below.

```javascript
export const selectAllTrips = createSelector([selectTripState], (tripState) => tripState.trips);

export const selectCompletedTrips = createSelector([selectAllTrips], (trips) =>
  trips.filter((trip) => trip.status === 'complete')
);
```

- [Reselect](https://github.com/reduxjs/reselect) also provides a function called [createStructuredSelector](https://github.com/reduxjs/reselect#createstructuredselectorinputselectors-selectorcreator--createselector) that takes an object and returns an object with the same keys, but with selectors replaced with their values. This is used throughout the app to map state to props.

```javascript
const mapStateToProps = createStructuredSelector({
  vehicle: selectVehicle,
});

const mapDispatchToProps = (dispatch) => ({
  setInput: (options) => dispatch(setInput(options)),
});

export default VehicleType;
```

- Regarding the above code snippet, it is worth noting that new features are now being built using [React-Redux-Hooks](https://react-redux.js.org/api/hooks) with TypeScript. So the above snippet is similar to this:

```javascript
interface InputOptions {
  name: 'vehicle';
  value: VehicleTypes;
}

const VehicleType = () => {
  const dispatch = useDispatch();
  const vehicleType = useSelector<VehicleTypes>(selectVehicle);

  const setVehicleType = (inputOptions: InputOptions) => {
    dispatch(setInput(inputOptions));
  };

  return (
    ....rest of the code
```

- [Redux-logger](https://www.npmjs.com/package/redux-logger) is used to track state changes while in development mode.

```javascript
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
```

- [Redux Thunk](https://github.com/reduxjs/redux-thunk) handles asynchronous API requests. Here's an example:

```javascript
export const updateTrip = (status: TripLoadingStatus, id: number) => {
  return async (dispatch: Dispatch<Action>, getState) => {
    const authHeaders = selectAuthHeaders(getState());
    dispatch({
      type: TripsActionTypes.SUBMIT,
      payload: {
        loadingType: status,
        loadingTripId: id,
      },
    });
    try {
      const result = await axios.put(
        `${process.env.NEXT_PUBLIC_TRIPS}/api/trips/${id}`,
        { status },
        authHeaders
      );
      dispatch({
        type: TripsActionTypes.UPDATE_TRIP,
        payload: {
          trip: result.data,
        },
      });
    } catch (error) {
      dispatch({
        type: TripsActionTypes.ERROR,
        payload: { error },
      });
    }
  };
};
```

- User authentication and authorization functionality is placed inside the "auth" redux module.

```javascript
export const userAuth = ({
  authType,
  username,
  password,
  name = '',
  email = '',
  phone = '',
}: UserAuth) => {
  return async (dispatch: Dispatch<FetchUser | FetchSuccess | Error>) => {
    dispatch({ type: AuthActionTypes.FETCH_USER });
    try {
      const result =
        authType === 'login'
          ? await axios.post(`${process.env.NEXT_PUBLIC_TRIPS}/api/${authType}`, {
              username,
              password,
            })
          : // for user registration, "name", "email", and "phone" are not required. If
            // excluded, they default to empty strings
            await axios.post(`${process.env.NEXT_PUBLIC_TRIPS}/api/${authType}`, {
              username,
              password,
              name,
              email,
              phone,
            });
      const { token } = result.data;
      dispatch({
        type: AuthActionTypes.FETCH_SUCCESS,
        payload: { token, currentUser: username },
      });
    } catch (error) {
      dispatch({
        type: AuthActionTypes.ERROR,
        payload: { errorMessage: 'Unable to login or register' },
      });
    }
  };
};
```

- Auth selectors help React components to conditionally render UI based
  on auth role. Currently there are users and one admin.

```javascript
export const selectAuthRole = createSelector([selectAuthState], (authState) => {
  if (!authState.currentUser) {
    return '';
  } else if (authState.currentUser === 'admin') {
    return 'admin';
  } else {
    return 'user';
  }
});
```

- Another example of an auth selector is the "selectAuthHeaders". This selector provides authentication headers with a JSON web token for HTTP requests. This enables admin-only authorized requests such as updating trip statuses and deleting trips. Furthermore, sensitive content(user/admin auth, trip information) is managed on the [back-end](https://github.com/ari7946/backend-taxi-service) by encoding and decoding credentials on a JSON web token.

```javascript
export const selectAuthHeaders = createSelector([selectAuthState], (authState) => {
  if (authState.token && authState.currentUser) {
    return {
      headers: {
        Authorization: authState.token,
      },
    };
  }
});
```
