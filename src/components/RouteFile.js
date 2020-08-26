import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import UserDivider from '../pages/userDivider/UserDivider';
import CompanySignUp from '../pages/CompanySignUp';
import Login from '../pages/Login';

export default function RouteFile() {
  return (
    <>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/companysignup">
          <CompanySignUp />
        </Route>
        <Route exact path="/users/user">
          <UserDivider />
        </Route>

      </Switch>
    </>
  );
}
