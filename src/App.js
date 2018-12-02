import React, { Component } from 'react';
import MapFormContainer from './components/MapFormContainer';
import NavbarContainer from './components/NavbarContainer';
import About from './components/About';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <>
        <NavbarContainer />
        <Switch>
          <Route path='/' exact component={MapFormContainer} /> 
          <Route path='/about' exact component={About} /> 
        </Switch>
      </>
    );
  }
}

export default App;
