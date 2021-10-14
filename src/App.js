import React, { Component } from 'react';
import MapFormContainer from './features/book';
import NavbarContainer from './features/navbar';
import Landing from './features/landing';
import About from './features/about';
import { AdminContainer, UserContainer } from './features/auth/';
import UserRegister from './features/auth/components/user/user-register.component';
import UserLogin from './features/auth/components/user/user-login.component';
import TripsContainer from './features/trips'
import { Route, Switch } from 'react-router-dom';
import './index.css';
import './utility.css';


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
