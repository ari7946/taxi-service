import React, { Component } from 'react';
import MapFormContainer from './components/book';
import NavbarContainer from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import TripsContainer from './components/admin';
import Login from './components/admin/TripsLogin';
import { Route, Switch } from 'react-router-dom';
import { ProvideAuth } from "./auth/use-auth";
import './index.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <ProvideAuth>
        <div className="wrapper">
          <NavbarContainer />
          <Switch>
            <Route path='/' exact component={Landing} /> 
            <Route path='/about' exact component={About} /> 
            <Route path='/book' exact component={MapFormContainer} />
            <Route path='/admin' exact component={Login} />
            <Route path='/admin/trips' exact component={TripsContainer} /> 
          </Switch>
        </div>
      </ProvideAuth>
    );
  }
}

export default App;
