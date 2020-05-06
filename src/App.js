import React, { Component } from 'react';
import MapFormContainer from './components/book/MapFormContainer';
import NavbarContainer from './components/navbar/NavbarContainer';
import Landing from './components/landing/Landing';
import About from './components/about/About';
import TripsContainer from './components/admin/TripsContainer';
import Login from './components/admin/Login';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <Switch>
          <Route path='/' exact component={Landing} /> 
          <Route path='/about' exact component={About} /> 
          <Route path='/book' exact component={MapFormContainer} />
          <Route path='/admin' exact component={Login} />
          <Route path='/admin/trips' exact component={TripsContainer} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
