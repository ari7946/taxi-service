import React, { Component } from 'react';
import MapFormContainer from './components/book';
import NavbarContainer from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import TripsContainer from './components/admin';
import AdminLogin from './components/admin/TripsLogin';
import Dashboard from './components/user-dash';
import UserRegister from './components/user-dash/UserRegister';
import UserLogin from './components/user-dash/UserLogin';
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
            <Route path='/admin' exact component={AdminLogin} />
            <Route path='/admin/trips' exact component={TripsContainer} /> 
            <Route path='/dashboard' exact component={Dashboard} />
            <Route path='/register' exact component={UserRegister} />
            <Route path='/login' exact component={UserLogin} />
          </Switch>
        </div>
      </ProvideAuth>
    );
  }
}

export default App;
