import React, { Component } from 'react';
import MapFormContainer from './components/MapFormContainer';
import NavbarContainer from './components/NavbarContainer';
import Landing from './components/Landing';
import About from './components/About';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <NavbarContainer />
        <Switch>
          <Route path='/' exact component={Landing} /> 
          <Route path='/about' exact component={About} /> 
          <Route path='/book' exact component={MapFormContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
