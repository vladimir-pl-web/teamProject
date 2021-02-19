import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/login/login';
import NewPass from './components/newPass/newPass';
import PassRecover from './components/passRecower/recover';
import Profile from './components/profile/profile';
import Register from './components/register/register';
import Error from './components/error/error'
import Nav from './components/navigation/nav';
import Packs from './components/packs/packs';
import Cards from './components/cards/cards';
import {Find} from "./components/find/Find";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path={"/"} render={() => <Profile />} />
        <Route exact path={"/login"} render={() => <Login />} />
        <Route exact path={"/register"} render={() => <Register />} />
        <Route exact path={"/packs"} render={() => <Packs />} />
        <Route exact path={"/cards/:id?/"} render={() => <Cards />} />
        <Route path={"/NewPass/:token"} render={() => <NewPass />} />
        <Route exact path={"/passRecover"} render={() => <PassRecover />} />
        <Route path={"*"} render={() => <Error />} />
        <Redirect from={"*"} to={"/404"} />
      </Switch>
        
    </div>

  );
}

export default App;
