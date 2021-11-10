// https://testing-library.com/docs/react-testing-library/setup/
// https://redux.js.org/usage/writing-tests#components

import React from 'react'
import {render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../_global/redux/root-reducer';

const middlewares = [thunk];

// only apply logger in development
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

const render = (
  ui,
  {
    preloadedState,
    store = createStore(rootReducer, preloadedState, applyMiddleware(...middlewares)),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions})
}

export * from '@testing-library/react';
export { render }
