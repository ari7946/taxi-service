import React, { Component } from 'react';
import MapFormContainer from './components/book';
import NavbarContainer from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import AdminContainer from './components/admin';
import UserRegister from './components/user/user-register.component';
import UserLogin from './components/user/user-login.component';
import TripsContainer from './components/trips'
import { Route, Switch } from 'react-router-dom';
import { ProvideAuth } from "./auth/use-auth";
import './index.css';
import './App.css';
import UserContainer from './components/user';
import {} from 'styled-components/cssprop'


class App extends Component {
  render() {
    return (
      <div className="wrapper container-fluid">
        <NavbarContainer />
        <Switch>
          <Route path='/' exact component={Landing} /> 
          <Route path='/about' exact component={About} /> 
          <Route path='/book' exact component={MapFormContainer} />
          <Route path='/admin' exact component={AdminContainer} />
          <Route path='/trips' exact component={TripsContainer} /> 
          <Route path='/user' exact component={UserContainer} />
          <Route path='/register' exact component={UserRegister} />
          <Route path='/login' exact component={UserLogin} />
        </Switch>
      </div>
    );
  }
}

export default App;
