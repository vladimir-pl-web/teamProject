import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/login/login';
import NewPass from './components/newPass/newPass';
import PassRecover from './components/passRecower/recover';
import Profile from './components/profile/profile';
import Register from './components/register/register';
import TestComponents from './components/testComponents/testComponents';
import Error from './components/error/error'
import Nav from './components/navigation/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path={"/"} render={() => <Register />} />
        <Route exact path={"/login"} render={() => <Login />} />
        <Route exact path={"/profile"} render={() => <Profile />} />
        <Route exact path={"/test"} render={() => <TestComponents />} />
        <Route path={"/NewPass/:token"} render={() => <NewPass />} />
        <Route exact path={"/passRecover"} render={() => <PassRecover />} />
        <Route path={"*"} render={() => <Error />} />
        <Redirect from={"*"} to={"/404"} />
      </Switch>
    </div>
  );
}

export default App;
