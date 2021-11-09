// https://testing-library.com/docs/react-testing-library/setup/
// https://redux.js.org/usage/writing-tests#components

import React from 'react'
import {render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const render = (
  ui,
  {
    preloadedState,
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
