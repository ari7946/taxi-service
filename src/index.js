import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from "react-router-dom";

import { store } from './redux/store';

ReactDOM.render(
  (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  ), document.getElementById('root'));

serviceWorker.register();
